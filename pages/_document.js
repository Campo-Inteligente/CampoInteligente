import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        {/* Ícones */}
        <link rel="icon" href="/icone.ico" />
        <link rel="icon" type="image/png" href="/icon.png" />
        
        {/*  Fonte personalizada Poppins do Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
