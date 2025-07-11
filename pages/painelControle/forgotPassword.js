import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/painelControleStyles/ForgotPassword.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// Componentes do React Bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Ícone de voltar (precisa instalar a biblioteca react-icons)
import { IoIosArrowBack } from "react-icons/io";

export default function forgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui virá a lógica para enviar o e-mail de recuperação
    console.log("Pedido de recuperação para:", email);
    alert(`Um link de recuperação foi enviado para ${email}! (Simulação)`);

    // Redireciona para a próxima tela
    router.push("/painelControle/forgotPasswordStep2");
  };

  return (
    <>
      <Head>
        <title>Recuperar Senha | Campo Inteligente</title>
      </Head>

      <div className={styles.backgroundContainer}>
        {/* O motion.div agora é um filho direto do container principal */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/painelControle/business" className={styles.backButton}>
            <IoIosArrowBack size={24} />
          </Link>

          <h2 className={styles.title}>Esqueceu sua senha?</h2>
          <p className={styles.instructions}>
            Sem problemas! Insira o e-mail associado à sua conta e enviaremos um
            link para você redefinir sua senha.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className={styles.formGroup} controlId="formEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                placeholder="seuemail@exemplo.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" className={styles.button}>
              Enviar
            </Button>
          </Form>

          <div className={styles.footerLink}>
            <Link href="/painelControle/business">
              Lembrou a senha? Voltar para o Login
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
