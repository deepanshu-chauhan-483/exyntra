import { getAppUrl } from "@/lib/helper/appUrl";
import prisma from "@/lib/prisma";
import { checkWorkflowCredits } from "@/lib/workflow/creditCheck";
import { WorkflowExecutionStatus, WorkflowStatus } from "@/types/workflow";
import { parseWorkflowSchedule } from "@/lib/cron/scheduleParser";

export async function GET(req: Request, res: Response) {
  const now = new Date();
  const workflows = await prisma.workflow.findMany({
    select: {
      id: true,
      cron: true,
      userId: true,
      creditsCost: true,
      name: true,
    },
    where: {
      status: WorkflowStatus.PUBLISHED,
      cron: {
        not: null,
      },
      nextRunAt: {
        lte: now,
      },
    },
  });
  const workflowsRun = [];
  const workflowsSkipped = [];
  for (const workflow of workflows) {
    // Check if workflow can be executed (pre-check for sufficient credits)
    const creditCheckResult = await checkWorkflowCredits(workflow.id);

    if (creditCheckResult.canExecute) {
      // Only trigger workflow if sufficient credits are available
      await triggerWorkflow(workflow.id);
      workflowsRun.push({
        id: workflow.id,
        name: workflow.name,
        creditsCost: workflow.creditsCost,
        userCredits: creditCheckResult.userCredits,
      });
      console.log(
        `Triggered workflow ${workflow.name} (${workflow.id}), credits: ${creditCheckResult.userCredits}/${workflow.creditsCost}`
      );
    } else {
      // Handle the case where workflow can't be executed
      console.log(
        `Skipping workflow ${workflow.name} (${workflow.id}): ${creditCheckResult.reason}, required: ${workflow.creditsCost}`
      );

      // Import and use the logWorkflowCreditFailure function if the reason is insufficient credits
      if (
        creditCheckResult.reason === "insufficient_credits" &&
        creditCheckResult.workflow
      ) {
        const { logWorkflowCreditFailure } = await import(
          "@/lib/workflow/creditCheck"
        );
        await logWorkflowCreditFailure(
          creditCheckResult.workflow.id,
          creditCheckResult.workflow.userId,
          creditCheckResult.workflow.creditsCost,
          creditCheckResult.userCredits || 0
        );
      }

      workflowsSkipped.push({
        id: workflow.id,
        name: workflow.name,
        reason: creditCheckResult.reason,
        required: workflow.creditsCost,
        available: creditCheckResult.userCredits || 0,
      });
    }

    // Update the next run time based on the schedule expression
    if (workflow.cron) {
      try {
        const nextRunAt = await calculateNextRun(workflow.cron);

        if (nextRunAt) {
          await prisma.workflow.update({
            where: { id: workflow.id },
            data: {
              nextRunAt,
              lastRunAt: creditCheckResult.canExecute ? now : undefined, // Only update lastRunAt if we actually ran the workflow
              // lastRunStatus: creditCheckResult.canExecute
              //   ? undefined
              //   : WorkflowExecutionStatus.SKIPPED_INSUFFICIENT_CREDITS, // Record skip reason if applicable
            },
          });
        }
      } catch (error) {
        console.error(
          `Failed to update next run time for workflow ${workflow.id}`,
          error
        );
      }
    }
  }
  return Response.json(
    {
      workflowsScheduled: workflows.length,
      workflowsRun: workflowsRun.length,
      workflowsRunDetails: workflowsRun,
      workflowsSkipped: workflowsSkipped.length,
      skippedDetails: workflowsSkipped,
      timestamp: now.toISOString(),
    },
    { status: 200 }
  );
}

/**
 * Calculates the next run time based on the schedule expression
 * Supports both standard cron expressions and simplified interval formats
 */
async function calculateNextRun(
  scheduleExpression: string
): Promise<Date | null> {
  const parsedSchedule = parseWorkflowSchedule(scheduleExpression);

  if (parsedSchedule.isValid && parsedSchedule.nextRunDate) {
    return parsedSchedule.nextRunDate;
  }

  console.error(`Invalid schedule expression: ${scheduleExpression}`);
  return null;
}

/**
 * Triggers a workflow execution by making a request to the execute endpoint
 * This function is called only after credit check is successful
 */
async function triggerWorkflow(workflowId: string) {
  const triggerApiUrl = getAppUrl(
    `api/workflows/execute?workflowId=${workflowId}`
  );

  try {
    console.log(`Triggering workflow ${workflowId} (credit check passed)`);
    const response = await fetch(triggerApiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.API_SECRET!}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Failed to trigger workflow ${workflowId}: HTTP ${response.status}`
      );
    } else {
      console.log(`Successfully triggered workflow ${workflowId}`);
    }
  } catch (err: any) {
    console.error(
      `Failed to trigger workflow ${workflowId}`,
      "error->",
      err.message
    );
  }
}
