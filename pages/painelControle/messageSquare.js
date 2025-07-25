import Head from "next/head";
import PainelLayout from "./components/PainelLayout";

export default function ComunicacaoPage() {
  return (
    <PainelLayout>
      <Head>
        <title>Comunicação | Painel Campo Inteligente</title>
      </Head>
      <div>
        <h1>Comunicação</h1>
        {/* O conteúdo da página de comunicação virá aqui */}
      </div>
    </PainelLayout>
  );
}
