import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/painelControleStyles/Business2.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    alert("Tentativa de login!");
  };

  return (
    <>
      <Head>
        <title>Login | Campo Inteligente</title>
      </Head>

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
