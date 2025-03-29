import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <link rel="icon" href="/icone.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
