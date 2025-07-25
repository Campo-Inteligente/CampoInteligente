import Head from "next/head";
import PainelLayout from "../painelControle/components/PainelLayout";

export default function DashboardPage() {
  return (
    <PainelLayout>
      <Head>
        <title>Dashboard | Painel Campo Inteligente</title>
      </Head>
      <div>
        <h1>Dashboard</h1>
        {/* O conteúdo principal do seu dashboard virá aqui */}
      </div>
    </PainelLayout>
  );
}
