import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/painelControleStyles/ForgotPassword.module.css";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

export default function forgotPasswordPage2() {
  const [email, setEmail] = useState("");

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
            Não recebeu o email?{"     "}
            <Link href="/painelControle/business"> Reenviar link</Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
