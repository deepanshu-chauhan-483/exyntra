---

# ⚡ Exyntra – Visual Web Scraping & Automation Platform

Built by Deepanshu Chauhan

Tech badges: Next.js 14, TailwindCSS 3.4, Clerk (Auth), Stripe (Payments), Vercel (Deploy)

---

TABLE OF CONTENTS

- Overview
- Features
- Task Types
- Tech Stack
- Architecture
- Workflow System
- Scheduling
- Credit System
- Security
- Analytics
- Environment Variables
- Screenshots
- Deployment
- Contributing
- License

---

OVERVIEW

Exyntra is a powerful visual web scraping & automation platform.
It lets you build workflows visually, run them in real-time, schedule executions, extract data with AI, and deliver results through emails, webhooks, or file downloads.

Think of it as Zapier for Web Scraping + AI-powered ETL.

---

FEATURES

Core:

- Visual Workflow Builder (drag & drop tasks)
- AI-Powered Extraction (OpenAI)
- Real-time Execution (logs, monitoring, live progress)
- Advanced Scheduling (hybrid cron + client-driven triggers)
- Credit System (usage-based billing with Stripe)
- Secure Credentials (AES-256 encrypted storage)
- Multi-format Output (JSON, CSV, Email, Webhooks)

Advanced:

- Conditional Logic
- Loop Processing
- Email Automation
- Screenshot & Table Extraction
- Data Transformation

Enterprise:

- Analytics Dashboard
- Multi-user support (Clerk Auth)
- Rate Limiting
- Error Recovery + Retry Mechanism
- Webhook Integration

---

TASK TYPES

Browser Automation:

- Launch Browser (5 credits)
- Navigate URL (2)
- Page to HTML (2)
- Wait for Element (1)
- Take Screenshot (3)

Element Interaction:

- Click Element (3)
- Fill Input (1)
- Scroll to Element (1)
- Wait Delay (1)

Data Extraction:

- Extract Text (2)
- Extract Table (3)
- Extract Data with AI (4)

Processing:

- Read JSON Property (1)
- Add JSON Property (1)
- Data Transform (2)
- Conditional Logic (1)

Control Flow:

- Loop (2)

Communication:

- Send Email (3)
- Deliver via Webhook (1)

File Ops:

- Download File (3)

---

TECH STACK

Frontend: Next.js 14, Tailwind, Shadcn/UI, Recharts
Backend: Next.js API Routes, Prisma, Puppeteer, OpenAI, Resend
Infra: Vercel, PostgreSQL, Stripe, Clerk, AES-256 encryption

---

ARCHITECTURE

User Creates Workflow → Validation Engine → Execution Engine
Execution Engine → Task Types:

- Browser Automation
- Element Interaction
- Data Extraction
- Data Processing
- Control Flow
- Communication
- File Ops
- AI Tasks

Execution Engine → Credit Tracking, Error Handling & Retry, Logs & Monitoring
Logs & Monitoring → Analytics Dashboard
Credit Tracking → Stripe Billing

---

WORKFLOW SYSTEM

- Drag-and-drop editor
- Real-time validation
- Preview mode (no credits used)
- Export / Import workflows
- Execution history

---

SCHEDULING

Exyntra uses a hybrid cron system:

- Vercel Cron → once daily (backup)
- Browser Cron → client-based polling (default 60s)

Supports both simple intervals (30s, 5m, 2h, 1d) and full cron expressions.

---

CREDIT SYSTEM

High-cost: Browser Launch (5)
Medium-cost: AI Extraction, Screenshot, File Download, Email (3–4)
Standard: Navigation, Extraction (2)
Low-cost: Waits, JSON ops (1)

Stripe-powered billing with auto top-ups & usage forecasts.

---

SECURITY

- Clerk-based Auth
- AES-256-CBC credential encryption
- Protected API routes
- Rate limiting & abuse prevention

---

ANALYTICS

- Success/Failure rates
- Execution performance metrics
- Credit usage trends
- Real-time error alerts

---

ENVIRONMENT VARIABLES

DATABASE_URL=postgresql://username:password@host:port/database
API_SECRET=your-secure-api-secret
ENCRYPTION_SECRET=32-char-hex-key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-key
CLERK_SECRET_KEY=sk_test_your-secret
STRIPE_SECRET_KEY=sk_test_your-secret
STRIPE_WEBHOOK_SECRET=whsec_your-secret
OPENAI_API_KEY=sk-your-openai-key
RESEND_API_KEY=re_your-resend-key

---

SCREENSHOTS

(Add images / screenshots here)

---

DEPLOYMENT

Vercel (recommended):

1. Connect repo to Vercel
2. Add environment variables
3. Deploy
4. Setup PostgreSQL + Stripe + Clerk
5. Test workflows

---

CONTRIBUTING

We welcome contributions:

1. Fork the repo
2. Create branch: feature/your-feature
3. Add changes + tests
4. Open PR

---

LICENSE

MIT © Deepanshu Chauhan

---
