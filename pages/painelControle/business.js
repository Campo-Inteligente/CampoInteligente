import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/painelControleStyles/Business.module.css";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function LoginPage() {
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
      {/* 2. A estrutura agora usa o Grid do Bootstrap */}
      <Container fluid className={`${styles.loginContainer} p-0`}>
        <Row className="g-0 vh-100">
          {/* Painel da Imagem: Oculto em telas menores que 'lg' (992px) */}
          <Col
            lg={6}
            className={`d-none d-lg-block ${styles.imagePanelWrapper}`}
          >
            <motion.div
              className={styles.imagePanel}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </Col>

          {/* Painel do Formulário: Ocupa a tela inteira em telas pequenas */}
          <Col lg={4} className={styles.formPanel}>
            <div className={styles.formWrapper}>
              <motion.div
                className={styles.logoContainer}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/imagens/logo-business.svg"
                  alt="Logo Campo Inteligente"
                  width={367 * 0.95}
                  height={264 * 0.95}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* 3. O formulário agora usa componentes Form do Bootstrap */}
                <Form onSubmit={handleLogin}>
                  <Form.Group
                    className={styles.formGroup}
                    controlId="formEmail"
                  >
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

                  <Form.Group
                    className={styles.formGroup}
                    controlId="formPassword"
                  >
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
                    <Form.Check
                      type="checkbox"
                      id="remember-me"
                      label="Manter-me conectado"
                      className={styles.customCheckboxContainer}
                    />

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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
