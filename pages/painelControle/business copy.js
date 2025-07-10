import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/painelControleStyles/Business.module.css";
// 1. Importe o 'motion'
import { motion } from "framer-motion";

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
      <div className={styles.loginContainer}>
        {/* Painel da Esquerda com a Imagem Animada */}
        <motion.div
          className={styles.imagePanel}
          initial={{ opacity: 0, x: -100 }} // Começa invisível e à esquerda
          animate={{ opacity: 1, x: 0 }} // Aparece e desliza para a posição final
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Painel da Direita com o Formulário */}
        <div className={styles.formPanel}>
          <div className={styles.formWrapper}>
            <motion.div
              className={styles.logoContainer}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }} // Atraso para animar depois da imagem
            >
              <Image
                src="/imagens/logovector.png"
                alt="Logo Campo Inteligente"
                width={367}
                height={264}
              />
            </motion.div>

            <motion.form
              onSubmit={handleLogin}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Campos do formulário... */}
              <div className={styles.formGroup}>
                <label htmlFor="email">Login:</label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="campointeligente@gmail.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="************"
                />
              </div>

              <div className={styles.optionsRow}>
                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id="remember-me"
                    className={styles.customCheckbox}
                  />
                  <label htmlFor="remember-me">Manter-me conectado</label>
                </div>
                <Link href="/esqueci-a-senha" className={styles.link}>
                  Esqueceu a senha?
                </Link>
              </div>

              <button type="submit" className={styles.button}>
                Entrar
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/criar-conta"
                className={`${styles.link} ${styles.createAccountLink}`}
              >
                Criar conta
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
