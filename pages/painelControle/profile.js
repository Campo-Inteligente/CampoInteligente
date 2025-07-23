import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head'; // 1. Importar o Head
import PainelLayout from './components/PainelLayout'; // 2. Importar o Layout (ajuste o caminho se necessário)
import styles from '../../styles/painelControleStyles/profile.module.css';

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  const getInitials = (name) => {
    if (!name) return '';
    const parts = name.split(' ');
    const firstInitial = parts[0] ? parts[0][0] : '';
    const lastInitial = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return `${firstInitial}${lastInitial}`.toUpperCase();
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const parsedData = JSON.parse(storedUserData);
        setUserData({
          nomeCompleto: parsedData.nome,
          email: parsedData.email,
          organizacao: parsedData.tb_organizacoes?.nome || 'Não especificada',
          cargo: parsedData.cargo,
          avatarUrl: '/imagens/joao2.jpg',
        });
      } else {
        router.push('/painelControle/business');
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    router.push('/painelControle/business');
  };

  // Envolve até mesmo o estado de "loading" no layout para uma experiência consistente
  if (!userData) {
    return (
      <PainelLayout>
        <Head>
          <title>Carregando... | Painel Campo Inteligente</title>
        </Head>
        <div>Carregando perfil...</div>
      </PainelLayout>
    );
  }

  // 3. Envolve todo o retorno principal com o PainelLayout
  return (
    <PainelLayout>
      <Head>
        <title>Meu Perfil | Painel Campo Inteligente</title>
      </Head>
      
      {/* O seu conteúdo original da página de perfil começa aqui */}
        <div className={styles.header}>
          <button onClick={() => router.back()} className={styles.backButton}>&larr; Voltar</button>
          <h2>Meu Perfil</h2>
        </div>

      <main className={styles.perfilContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.avatarAndNameRow}>
            <div className={styles.avatarInitialsContainer}>
              <div className={styles.avatarInitials}>
                {getInitials(userData.nomeCompleto)}
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.nameGroup}`}>
              <label htmlFor="nomeCompleto">Nome completo:</label>
              <input
                type="text"
                id="nomeCompleto"
                value={userData.nomeCompleto}
                disabled
              />
            </div>
          </div>

          <form className={styles.formSection}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  value={userData.email}
                  disabled
                />
              </div>
              <div className={`${styles.formGroup} ${styles.organizacaoGroup}`}>
                <label htmlFor="organizacao">Sua organização:</label>
                <input
                  type="text"
                  id="organizacao"
                  value={userData.organizacao}
                  disabled
                />
              </div>
            </div>

            <div className={`${styles.formRow} ${styles.lastFormRow}`}>
              <div className={styles.formGroup}>
                <label htmlFor="cargo">Seu Cargo:</label>
                <input
                  type="text"
                  id="cargo"
                  value={userData.cargo}
                  disabled
                />
              </div>
              <div className={styles.actionsSection}>
                <button
                  type="button"
                  className={styles.changePasswordButton}
                >
                  Trocar senha
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.footerActions}>
          <button type="button" onClick={handleLogout} className={styles.logoutButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
            Sair
          </button>
        </div>
      </main>
    </PainelLayout>
  );
}