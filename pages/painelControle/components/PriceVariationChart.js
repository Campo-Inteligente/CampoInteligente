import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import styles from '../../../styles/painelControleStyles/dashboard.module.css';
import Image from 'next/image';

const mockPriceData = {
  'Saca de Café': [870, 885, 875, 880, 870, 865, 875, 880, 870, 860, 891, 885, 890],
  'Saca de Cacau': [250, 255, 245, 260, 250, 255, 265, 270, 260, 255, 260, 265, 275],
  'Saca de Soja': [150, 152, 148, 155, 153, 150, 156, 154, 158, 160, 157, 155, 159],
  'Outros': [100, 105, 98, 102, 110, 108, 105, 103, 107, 112, 115, 110, 113],
};

const labels = ['16/05', '24/05', '01/06', '09/06', '17/06', '25/06', '03/07', '11/07', '19/07', '27/07', '04/08', '12/08', '20/08'];

export default function PriceVariationChart() {
  const [selectedProduct, setSelectedProduct] = useState('Saca de Café');

  const data = {
    labels,
    datasets: [
      {
        label: `Preço - ${selectedProduct}`,
        data: mockPriceData[selectedProduct],
        borderColor: '#facc15',
        backgroundColor: '#facc15',
        tension: 0.1,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#facc15',
        titleColor: '#1f2937',
        bodyColor: '#1f2937',
        bodyFont: { weight: 'bold' },
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `R$ ${context.parsed.y}`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.2)', drawBorder: false },
        ticks: { color: 'white' },
      },
      y: {
        grid: { display: false },
        ticks: {
          color: 'white',
          callback: function(value) {
            return `R$ ${value}`;
          }
        },
      },
    },
  };

  return (
    <div className={`${styles.card} ${styles.priceChartCard}`}>
      <div className={styles.priceChartHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h3 className={styles.priceChartTitle}>Variação de Preços</h3>
          <select 
            className={styles.productSelector} 
            value={selectedProduct} 
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {Object.keys(mockPriceData).map(product => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>
        </div>
        <Image src="/imagens/chart-icon.svg" width={24} height={24} alt="Ícone de Gráfico" />
      </div>
      <div className={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}