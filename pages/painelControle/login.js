import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/painelControleStyles/Business.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SuccessToast from "../../pages/painelControle/components/SuccessToast";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setShowToast(true);

        // Atraso para permitir que o toast seja exibido antes do redirecionamento
        setTimeout(() => {
          localStorage.setItem("authToken", result.token);
          localStorage.setItem("userData", JSON.stringify(result.user));
          router.push("/painelControle/dashboard");
        }, 1000);
      } else {
        alert(`Erro: ${result.message}`);
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Não foi possível conectar ao servidor. Tente novamente.");
    }
  };

  return (
    <>
      <Head>
        <title>Login | Campo Inteligente</title>
      </Head>

      {showToast && (
        <SuccessToast
          title="Login bem-sucedido!"
          message="Você será redirecionado para o painel."
          duration={2000}
          onClose={() => setShowToast(false)}
        />
      )}
 <div className={styles.backgroundContainer}>
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className={styles.logoContainer}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/imagens/logo-business.svg"
              alt="Logo Campo Inteligente"
              width={367 * 0.9}
              height={264 * 0.9}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 3. O formulário agora usa componentes Form do Bootstrap */}
            <Form onSubmit={handleLogin}>
              <Form.Group className={styles.formGroup} controlId="formEmail">
                <Form.Label>Login:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="campointeligente@gmail.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className={styles.formGroup} controlId="formPassword">
                <Form.Label>Senha:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="************"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className={styles.optionsRow}>
                <Form.Group
                  className={styles.checkboxGroup}
                  controlId="termsAccepted"
                >
                  <Form.Check type="checkbox" name="termsAccepted" required>
                    <Form.Check.Input
                      type="checkbox"
                      className={styles.checkboxInput}
                    />
                    <Form.Check.Label className={styles.checkboxLabel}>
                      Manter-me conectado
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>

                <Link
                  href="/painelControle/forgotPassword"
                  className={styles.link}
                >
                  Esqueceu a senha?
                </Link>
              </div>

              <Button type="submit" className={styles.button}>
                Entrar
              </Button>
            </Form>

            <div className={`${styles.createAccountLink} mt-3`}>
              <Link href="/painelControle/signUp" className={styles.link}>
                Criar conta
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
