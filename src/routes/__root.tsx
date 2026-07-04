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
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl text-foreground">Seite nicht gefunden</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Die aufgerufene Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-xs font-medium tracking-[0.28em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Fehler</p>
        <h1 className="mt-4 text-4xl text-foreground">Diese Seite konnte nicht geladen werden</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-foreground px-6 py-3 text-xs font-medium tracking-[0.28em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="border border-border px-6 py-3 text-xs font-medium tracking-[0.28em] uppercase text-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "M8 International Protection – Sicherheitsdienst Wien" },
      {
        name: "description",
        content:
          "M8 International Protection ist Ihr diskreter Sicherheitspartner in Wien: Personenschutz, Sicherheitstraining und Sicherheitsberatung auf höchstem Niveau.",
      },
      { name: "author", content: "M8 International Protection" },
      { property: "og:title", content: "M8 International Protection – Sicherheitsdienst Wien" },
      {
        property: "og:description",
        content:
          "Personenschutz, Sicherheitstraining und Sicherheitsberatung für nationale und internationale Klienten – aus Wien, weltweit im Einsatz.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_AT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
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
