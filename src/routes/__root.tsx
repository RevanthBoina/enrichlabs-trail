import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">Page not found</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-brand px-5 py-2 text-sm font-medium text-brand-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-brand px-5 py-2 text-sm font-medium text-brand-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Enrich Labs — AI Marketing Operating System" },
      { name: "description", content: "Autonomous AI marketing agents that write, publish, optimize, and report across every channel — 24/7." },
      { property: "og:title", content: "Enrich Labs — AI Marketing Operating System" },
      { property: "og:description", content: "Autonomous AI marketing agents that write, publish, optimize, and report across every channel — 24/7." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Enrich Labs — AI Marketing Operating System" },
      { name: "twitter:description", content: "Autonomous AI marketing agents that write, publish, optimize, and report across every channel — 24/7." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/282fda92-c966-46dd-8d2f-519481fd13a5/id-preview-1dd8638c--84afb57f-0226-47fa-8b8a-7e422e3f7f08.lovable.app-1783695744025.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/282fda92-c966-46dd-8d2f-519481fd13a5/id-preview-1dd8638c--84afb57f-0226-47fa-8b8a-7e422e3f7f08.lovable.app-1783695744025.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
