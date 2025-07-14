import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/painelControleStyles/ForgotPassword.module.css";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

export default function ForgotPasswordPage2() {
  // Estado para controlar se o link foi enviado
  const [isLinkSent, setIsLinkSent] = useState(false);

  // Função para lidar com o clique no botão de reenviar
  const handleResendLink = (e) => {
    e.preventDefault();

    // Aqui virá a lógica para chamar a API e reenviar o e-mail de fato
    console.log("Simulando reenvio do link...");

    setIsLinkSent(true);
  };

  return (
    <>
      <Head>
        <title>Recuperar Senha | Campo Inteligente</title>
      </Head>

      <div className={styles.backgroundContainer}>
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className={styles.title}>Verifique seu e-mail</h2>
          <p className={styles.instructions}>
            Enviamos um e-mail com as instruções para a redefinição da sua
            senha. Se não encontrar na caixa de entrada, verifique sua pasta de
            spam.
          </p>

          <Button href="/painelControle/business" className={styles.button}>
            Voltar ao login
          </Button>

          <div className={styles.footerLink}>
            Não recebeu o email?{" "}
            {/* 3. O Link foi trocado por um botão com lógica condicional */}
            <button
              onClick={handleResendLink}
              disabled={isLinkSent}
              className={styles.resendButton}
            >
              {isLinkSent ? "Link enviado!" : "Reenviar link"}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
