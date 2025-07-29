import Head from "next/head";
import PainelLayout from "./components/PainelLayout";
import styles from "../../styles/painelControleStyles/dashboard.module.css";
import Image from "next/image";
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Importando os componentes que já estavam em arquivos separados
import LocationMapCard from "./components/LocationMapCard";
import ActiveUsersChartCard from "./components/ActiveUsersChart";
import PriceVariationChart from "./components/PriceVariationChart";

// Registrando elementos do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

// --- SUBCOMPONENTES PARA LEGIBILIDADE ---

// Componente reutilizável para os 3 cards de estatísticas no topo
const StatCard = ({ title, value, change, theme }) => {
  const cardClasses = theme === 'success'
    ? `${styles.card} bg-success text-white`
    : styles.card;

  return (
    <div className={cardClasses}>
      <div className={styles.cardTitle}>
        {title}
        <Image
          src="/imagens/icons-dashboard/total-users.svg"
          alt="Total Usuários"
          width={28}
          height={28}
        />
      </div>
      <div className={styles.statCardValue}>{value}</div>
      <div className={theme === 'success' ? '' : styles.statCardChange}>
        {change} {theme !== 'success'}
      </div>
    </div>
  );
};

// Componente para o card de Novos Usuários
const NewUsersCard = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [{
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 10),
      backgroundColor: (context) => context.dataset.data[context.dataIndex] > 40 ? '#ef4444' : '#ec4899',
      borderRadius: 2,
    }],
  };
  const options = { maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } };
  
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>Novos Usuários (Últimos 30 dias)</div>
      <div style={{ height: '150px' }}>
        <Bar
          data={data}
          options={options}
        />

      </div>
    </div>
  );
};

// Componente para o card de Ranking de Preços
const RankingCard = () => {
  const rankings = [
    { rank: 1, item: 'Saca de Café', value: '1,240' },
    { rank: 2, item: 'Arroba de Cacau', value: '980' },
    { rank: 3, item: 'Saca de Soja', value: '750' },
    { rank: 4, item: 'Saca de Milho', value: '610' },
    { rank: 5, item: 'Tonelada de Cana', value: '450' },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>Ranking de Consultas de Preços</div>
      <table className={styles.rankingTable}>
        <tbody>
          {rankings.map(r => (
            <tr key={r.rank}>
              <td><span className={styles.rankNumber}>{r.rank}</span></td>
              <td>{r.item}</td>
              <td className="text-end">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Componente para o card de Principais Culturas (Gráfico de Rosca)
const CulturesCard = () => {
  const data = {
    labels: ['Cacau', 'Soja', 'Café', 'Outros'],
    datasets: [{
      data: [47.8, 20.1, 16.5, 15.6],
      backgroundColor: ['#ec4899', '#f59e0b', '#3b82f6', '#10b981'],
      borderWidth: 0,
      hoverOffset: 4,
    }],
  };
  const options = { maintainAspectRatio: false, plugins: { legend: { position: 'top', align: 'start', labels: { boxWidth: 12, padding: 15 }}}};

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>Principais Culturas</div>
      <div style={{ height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};


// --- COMPONENTE PRINCIPAL DA PÁGINA ---

export default function DashboardPage() {
  return (
    <PainelLayout>
      <Head>
        <title>Dashboard | Painel Campo Inteligente</title>
      </Head>
      <div className="container-fluid">
        
        <h1 className="h2 mb-4">Dashboard</h1>

        {/* --- PRIMEIRA LINHA --- */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6 col-xl-4">
            <StatCard title="Total de Usuários" value="1,680" change="+1,500 no último mês" />
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <StatCard
              title="Engajamento Total" value="580.5K" change={
                <>
                  +12.5% vs. mês anterior
                  <Image
                    src="/imagens/icons-dashboard/arrowUpDown.svg"
                    alt="Variação"
                    width={20}
                    height={18}
                  />
                </>
              } />
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <StatCard title="Alertas de Pragas Ativos" value="12" change="Ver detalhes" theme="success" />
          </div>
        </div>

        {/* --- SEGUNDA LINHA --- */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-xl-7">
            <div className="row g-4">
              <div className="col-12"><NewUsersCard /></div>
              <div className="col-12"><RankingCard /></div>
            </div>
          </div>
          <div className="col-12 col-xl-5">
            <CulturesCard />
          </div>
        </div>

        {/* --- TERCEIRA LINHA --- */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-xl-6"><LocationMapCard /></div>
          <div className="col-12 col-xl-6"><ActiveUsersChartCard /></div>
        </div>

        {/* --- QUARTA LINHA --- */}
        <div className="row g-4 mb-4">
          <div className="col-12"><PriceVariationChart /></div>
        </div>

      </div>
    </PainelLayout>
  );
}