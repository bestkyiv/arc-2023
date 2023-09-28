import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel={"icon"} href={"favicon.svg"}></link>
        <title>ARC</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src={"index.js"} />
      </body>
    </Html>
  );
}
