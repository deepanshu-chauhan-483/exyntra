import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exyntra",
  description:
    "Next.js, TypeScript, React-Flow, Prisma, and React-Query to build a scalable SaaS platform for web scraping and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/sign-in"}
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-primary hover:bg-primary/90 text-sm !shadow-none",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <AppProviders>{children}</AppProviders>
        </body>
        <Toaster richColors />
      </html>
    </ClerkProvider>
  );
}
