import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        {/* Ícones */}
        <link rel="icon" href="/icone.ico" />
        <link rel="icon" type="image/png" href="/icon.png" />

        {/* Fontes personalizadas - Adicionado no _document.js para uso global */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
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
