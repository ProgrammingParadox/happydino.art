import { type PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import Nav from "../islands/Nav.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Happy Dino!</title>

        <link rel="stylesheet" href="/styles.css" />
      </head>

      <Nav />
      <body f-client-nav>
        <Partial name="body">
            <Component />
        </Partial>
      </body>
    </html>
  );
}
