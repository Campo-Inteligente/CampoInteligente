import React from 'react';
import styles from '../../../styles/painelControleStyles/dashboard.module.css';
import Image from 'next/image';

export default function LocationMapCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        Distribuição por Localização
        <Image src="/imagens/location-icon.svg" width={24} height={24} alt="Ícone de Localização" />
      </div>
      <div className={styles.mapContainer}>
        <div className={`${styles.mapMarker} ${styles.markerPink}`} style={{ top: '35%', left: '55%' }}>
          903 usuários
        </div>
        <div className={`${styles.mapMarker} ${styles.markerBlue}`} style={{ top: '50%', left: '30%' }}>
          1,205 usuários
        </div>
        <div className={`${styles.mapMarker} ${styles.markerPurple}`} style={{ top: '80%', left: '45%' }}>
          707 usuários
        </div>
      </div>
    </div>
  );
}