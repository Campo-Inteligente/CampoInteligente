import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PainelLayout from "./components/PainelLayout";
import Image from "next/image";
import ChangePasswordModal from "./components/ChangePasswordModal";
import SuccessToast from "./components/SuccessToast";
import styles from "../../styles/painelControleStyles/profile.module.css";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

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
    localStorage.removeItem("authToken"); // Mantido para consistência
    localStorage.removeItem("userData"); // Mantido para consistência
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

  // A função getInitials pode ser movida para um arquivo de utilitários
  // para evitar duplicação, já que também existe em PainelLayout.js
  const getInitials = (name) => {
    if (!name) return '';
    const parts = name.split(' ');
    return `${parts[0]?.[0] ?? ''}${parts.length > 1 ? parts[parts.length - 1][0] : ''}`.toUpperCase();
  };

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
        <Row className="align-items-center mb-4 gy-4">
          <Col xs={12} md="auto" className={styles.avatarInitialsContainer}>
            <div className={styles.avatarInitials}>
              {getInitials(userData.nomeCompleto)}
            </div>
          </Col>
          <Col xs={12} md>
            <Form.Group className={styles.formGroup}>
              <Form.Label htmlFor="nomeCompleto">Nome completo:</Form.Label>
              <Form.Control
                type="text"
                id="nomeCompleto"
                value={userData.nomeCompleto}
                disabled
                className={styles.input}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form>
          <Row className="mb-4 gy-4">
            <Col md={6}>
              <Form.Group className={styles.formGroup}>
                <Form.Label htmlFor="email">E-mail:</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  value={userData.email}
                  disabled
                  className={styles.input}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className={styles.formGroup}>
                <Form.Label htmlFor="organizacao">Sua organização:</Form.Label>
                <Form.Control
                  type="text"
                  id="organizacao"
                  value={userData.organizacao}
                  disabled
                  className={styles.input}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="align-items-end gy-4">
            <Col md={6}>
              <Form.Group className={styles.formGroup}>
                <Form.Label htmlFor="cargo">Seu Cargo:</Form.Label>
                <Form.Control type="text" id="cargo" value={userData.cargo} disabled className={styles.input} />
              </Form.Group>
            </Col>
            <Col md={6} className="d-flex justify-content-center justify-content-md-end">
              <Button type="button" className={styles.changePasswordButton} onClick={() => setIsModalOpen(true)}>
                Trocar senha
              </Button>
            </Col>
          </Row>
        </Form>

        <div className={styles.footerActions}>
          <Button variant="danger" onClick={handleLogout} className={styles.logoutButton}>
            <Image
              src="/imagens/sair-icon.svg"
              alt="Ícone de Sair"
              width={20}
              height={20}
            />
            Sair
          </Button>
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
