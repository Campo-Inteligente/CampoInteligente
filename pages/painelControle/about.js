import Head from "next/head";
import PainelLayout from "./components/PainelLayout";

export default function PerfilPage() {
  return (
    <PainelLayout>
      <Head>
        <title>Sobre | Painel Campo Inteligente</title>
      </Head>
      <div>
        <h1>Sobre</h1>
        {/* O conteúdo da página de perfil virá aqui */}
      </div>
    </PainelLayout>
  );
}
