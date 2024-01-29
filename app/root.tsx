import * as React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { withEmotionCache } from "@emotion/react";
import {
  Box,
  unstable_useEnhancedEffect as useEnhancedEffect,
} from "@mui/material";
import ClientStyleContext from "./src/ClientStyleContext";
import Header from "./src/components/AppBar";
import { DocumentProps } from "./src/utils/Interfaces";
import sharedStyles from "~/styles/shared-styles.css";

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext);

    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        // eslint-disable-next-line no-underscore-dangle
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
        </head>
        <body>
          {/* <Box sx={{ display: "flex" }}> */}
          <Header />
          <Box component="main" sx={{ flexGrow: 1, pt: 10 }}>
            {children}
            <div className="background" />
          </Box>

          {/* </Box> */}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: sharedStyles,
    },
  ];
};

export default function App() {
  return (
    <Document title="food-app">
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = (
          <p>
            Oops! Looks like you tried to visit a page that you do not have
            access to.
          </p>
        );
        break;
      case 404:
        message = (
          <p>Oops! Looks like you tried to visit a page that does not exist.</p>
        );
        break;

      default:
        throw new Error(error.data || error.statusText);
    }

    return (
      <Document title={`${error.status} ${error.statusText}`}>
        <h1>
          {error.status}: {error.statusText}
        </h1>
        {message}
      </Document>
    );
  }

  if (error instanceof Error) {
    console.error(error);
    return (
      <Document title="Error!">
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Document>
    );
  }

  return <h1>Unknown Error</h1>;
}
