import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from '../../../styles/painelControleStyles/dashboard.module.css';
import Image from 'next/image';

export default function ActiveUsersChartCard() {
  const data = {
    labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    datasets: [
      {
        label: 'Inativos',
        data: [250, 150, 400, 300, 200, 100, 350],
        backgroundColor: '#166534',
        borderRadius: 4,
        borderSkipped: false,
      },
      {
        label: 'Ativos',
        data: [150, 300, 100, 200, 300, 450, 150],
        backgroundColor: '#ec4899',
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { color: 'white' },
      },
      y: {
        stacked: true,
        display: false,
      },
    },
  };

  return (
    <div className={`${styles.card} ${styles.activeUsersCard}`}>
      <div className={styles.cardTitle}>
        Usuários Ativos
        <Image src="/imagens/check-icon.svg" width={24} height={24} alt="Ícone de Check" />
      </div>
      <div className={styles.filterButtons}>
        <button>Diário</button>
        <button className={styles.active}>Semanal</button>
        <button>Mensal</button>
      </div>
      <div style={{ height: '250px', marginTop: '1.5rem' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}