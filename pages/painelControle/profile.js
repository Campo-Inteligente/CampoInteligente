import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PainelLayout from "./components/PainelLayout";
import Image from "next/image";
import ChangePasswordModal from "./components/ChangePasswordModal";
import SuccessToast from "./components/SuccessToast";
import styles from "../../styles/painelControleStyles/profile.module.css";

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.split(" ");
    const firstInitial = parts[0] ? parts[0][0] : "";
    const lastInitial = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return `${firstInitial}${lastInitial}`.toUpperCase();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const parsedData = JSON.parse(storedUserData);
        setUserData({
          ...parsedData, // Inclui todos os dados, como o ID
          nomeCompleto: parsedData.nome,
          organizacao: parsedData.tb_organizacoes?.nome || "Não especificada",
        });
      } else {
        router.push("/painelControle/login");
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    router.push("/painelControle/login");
  };

  const handlePasswordChangeSuccess = () => {
    setShowSuccessToast(true);
  };

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

  return (
    <PainelLayout>
      <Head>
        <title>Meu Perfil | Painel Campo Inteligente</title>
      </Head>

      {showSuccessToast && (
        <SuccessToast
          title="Senha alterada"
          message="Sua senha foi alterada com sucesso."
          onClose={() => setShowSuccessToast(false)}
        />
      )}

      <div className={styles.header}>
        <button onClick={() => router.back()} className={styles.backButton}>
          <Image
            src="/imagens/voltarIcon.svg"
            alt="Ícone de voltar"
            width={16}
            height={16}
            priority
          />
          Voltar
        </button>
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
                <input type="text" id="cargo" value={userData.cargo} disabled />
              </div>
              <div className={styles.actionsSection}>
                <button
                  type="button"
                  className={styles.changePasswordButton}
                  onClick={() => setIsModalOpen(true)}
                >
                  Trocar senha
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.footerActions}>
          <button
            type="button"
            onClick={handleLogout}
            className={styles.logoutButton}
          >
            <Image
              src="/imagens/sair-icon.svg"
              alt="Ícone de Sair"
              width={20}
              height={20}
            />
            Sair
          </button>
        </div>
      </main>

      <ChangePasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handlePasswordChangeSuccess}
      />
    </PainelLayout>
  );
}
