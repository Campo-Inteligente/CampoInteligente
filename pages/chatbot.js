import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/NavbarVerde";
import Footer from "../components/Footer";
import styles from "../styles/Chatbot.module.css";

export default function Chatbot() {
  return (
    <>
      <Head>
        <title>Conheça nosso ChatBot | Campo Inteligente</title>
      </Head>

      <main className={styles.container}>
        <section
          className={`${styles.heroSection} container d-flex flex-column align-items-center text-center`}
        >
          <Navbar />

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={styles.titulo}>
              Otimize sua produção agrícola com o nosso ChatBot no WhatsApp!
            </h2>
            <p className={styles.subtitulo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          <div className={styles.mockupContainer}>
            <Image
              src="/imagens/c1.png"
              alt="Menu do ChatBot"
              width={320}
              height={650}
              className={styles.mockupImage}
              style={{ marginRight: "-20px" }}
            />
            <Image
              src="/imagens/c2.png"
              alt="Interação com usuário"
              width={320}
              height={650}
              className={styles.mockupImage}
              style={{ transform: "translateY(70px)", marginLeft: "-120px" }}
            />
            <Image
              src="/imagens/c3.png"
              alt="Solução recomendada"
              width={320}
              height={650}
              className={styles.mockupImage}
              style={{ marginLeft: "-250px" }}
            />
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>O que oferecemos:</h2>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/imagens/previsao.png"
                    alt="Ícone Previsão"
                    width={50}
                    height={50}
                  />
                  <h3>Previsão Climática</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/imagens/alerta.png"
                    alt="Ícone Alerta"
                    width={50}
                    height={50}
                  />
                  <h3>Alertas de Pragas</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/imagens/analise.png"
                    alt="Ícone Análise"
                    width={50}
                    height={50}
                  />
                  <h3>Análise de Mercado</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/imagens/simulacao.png"
                    alt="Ícone Simulação"
                    width={50}
                    height={50}
                  />
                  <h3>Simulação de Safra</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Por que usar?</h2>

            <ul className={styles.benefitsList}>
              <li>
                <span className={styles.checkIcon}>1</span>
                <h3>Acesso rápido à informação</h3>
                <p>
                  Obtenha respostas instantâneas sem necessidade de pesquisas
                  demoradas.
                </p>
              </li>

              <li>
                <span className={styles.checkIcon}>2</span>
                <h3>Disponibilidade 24/7</h3>
                <p>Acesse quando precisar, a qualquer hora do dia ou noite.</p>
              </li>

              <li>
                <span className={styles.checkIcon}>3</span>
                <h3>Apoio na tomada de decisão</h3>
                <p>
                  Informações precisas para ajudar você a tomar as melhores
                  decisões.
                </p>
              </li>

              <li>
                <span className={styles.checkIcon}>4</span>
                <h3>Facilidade de uso</h3>
                <p>Interface simples e intuitiva diretamente no WhatsApp.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Mais informações</h2>
            <p className={styles.infoText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
              estimai diurno e aperitivo, quis nostrud exercício laboratorio.
              Quanto risco é elipsig o serviço em conduta.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
