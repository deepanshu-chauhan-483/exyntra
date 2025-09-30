"use client";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextTopLoader from "nextjs-toploader";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LocalCronRunner } from "../LocalCronRunner";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
  {/* use CSS variable for primary so loader matches theme */}
  <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      <LocalCronRunner />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
