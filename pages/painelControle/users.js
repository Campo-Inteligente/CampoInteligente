import Head from "next/head";
import PainelLayout from "./components/PainelLayout";

export default function PerfilPage() {
  return (
    <PainelLayout>
      <Head>
        <title>Usuários | Painel Campo Inteligente</title>
      </Head>
      <div>
        <h1>Usuarios</h1>
        {/* O conteúdo da página de perfil virá aqui */}
      </div>
    </PainelLayout>
  );
}
