import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <link rel="icon" href="/icone.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" />

      {/* adicionado o link da font no document.js, isso não pode ser adicionado em paginas internas diretamente...
       O correto é adicionar no "template/layout" do nextJs, que usando a rota "pages" é o arquivo _documentjs.. 
       Isso vale para outros imports também */}
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
