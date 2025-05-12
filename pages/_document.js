import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        {/* Ícones */}
        <link rel="icon" href="/icone.ico" />
        <link rel="icon" type="image/png" href="/icon.png" />
        
        {/* Removido o <link> da fonte Poppins */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
