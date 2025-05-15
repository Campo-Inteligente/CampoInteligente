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
              Receba previsões climáticas, alertas de pragas e dicas de cultivo
              direto no seu celular. Fácil, rápido e do jeito que o agricultor
              precisa!
            </p>
          </motion.div>

          <div className={styles.mockupContainer}>
            {/* Versão desktop com posicionamento centralizado */}
            <div className={`d-none d-md-flex ${styles.mockupRow}`}>
              <Image
                src="/imagens/next1.png"
                alt="Menu do ChatBot"
                width={300}
                height={500}
                style={{ marginRight: "100px" }}
              />

              <div
                className="position-relative d-flex flex-column align-items-center"
                style={{ zIndex: 2 }}
              >
                <motion.a
                  href="/chatbot"
                  className={styles.chatbotBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    marginBottom: "-15px",
                    marginTop: "40px",
                    zIndex: 3,
                  }}
                >
                  ChatBot ↗
                </motion.a>

                <Image
                  src="/imagens/next2.png"
                  alt="Interação com usuário"
                  width={300}
                  height={500}
                  style={{
                    transform: "translateY(50px)",
                  }}
                />
              </div>

              <Image
                src="/imagens/next3.png"
                alt="Solução recomendada"
                width={300}
                height={500}
                style={{ marginLeft: "100px" }}
              />
            </div>

            {/* Versão mobile - carrossel ajustado */}
            <div className="d-md-none w-100">
              {}
              <div className="text-center">
                <motion.a
                  href="/chatbot"
                  className={styles.chatbotBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ChatBot ↗
                </motion.a>
              </div>

              {/* Container do carrossel */}
              <div
                style={{
                  position: "relative",
                  margin: "0 auto",
                  maxWidth: "600px",
                  paddingBottom: "30px",
                }}
              >
                <div
                  id="chatbotCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {["next1", "next2", "next3"].map((img, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div className={styles.carouselImageContainer}>
                          <Image
                            src={`/imagens/${img}.png`}
                            alt={
                              index === 0
                                ? "Menu do ChatBot"
                                : index === 1
                                ? "Interação com usuário"
                                : "Solução recomendada"
                            }
                            width={600}
                            height={650}
                            className={styles.carouselImage}
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {}
                <div
                  className={`carousel-indicators ${styles.carouselIndicators}`}
                >
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#chatbotCarousel"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>O que oferecemos:</h2>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardHeader2}>
                  <Image
                    src="/imagens/previsao.png"
                    alt="Ícone Previsão"
                    width={50}
                    height={50}
                  />
                  <h3>Previsão Climática</h3>
                </div>
                <p>
                  Informações meteorológicas precisas para ajudar no
                  planejamento das suas atividades agrícolas.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardHeader2}>
                  <Image
                    src="/imagens/alerta.png"
                    alt="Ícone Alerta"
                    width={50}
                    height={50}
                  />
                  <h3>Alertas de Pragas</h3>
                </div>
                <p>
                  Receba notificações sobre surtos de pragas em sua região e
                  recomendações de controle.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardHeader2}>
                  <Image
                    src="/imagens/analise.png"
                    alt="Ícone Análise"
                    width={50}
                    height={50}
                  />
                  <h3>Análise de Mercado</h3>
                </div>
                <p>
                  Dados atualizados sobre preços de commodities e tendências de
                  mercado.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardHeader2}>
                  <Image
                    src="/imagens/simulacao.png"
                    alt="Ícone Simulação"
                    width={50}
                    height={50}
                  />
                  <h3>Simulação de Safra</h3>
                </div>
                <p>
                  Projeções de produtividade baseadas em condições climáticas e
                  histórico da sua região.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="container text-center">
            <h2 className={styles.sectionTitle2}>Por que usar?</h2>

            <div className={styles.benefitsContainer}>
              <div className={styles.benefitCard}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/imagens/a1.png"
                    alt="Ícone Informação"
                    width={45}
                    height={45}
                  />
                  <h3>Acesso rápido à informação</h3>
                </div>
                <p>
                  Obtenha respostas instantâneas sem necessidade de pesquisas
                  demoradas.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/imagens/a2.png"
                    alt="Ícone Disponibilidade"
                    width={45}
                    height={45}
                  />
                  <h3>Disponibilidade 24/7</h3>
                </div>
                <p>Acesse quando precisar, a qualquer hora do dia ou noite.</p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/imagens/a3.png"
                    alt="Ícone Apoio"
                    width={45}
                    height={45}
                  />
                  <h3>Apoio na tomada de decisão</h3>
                </div>
                <p>
                  Informações precisas para ajudar você a tomar as melhores
                  decisões.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/imagens/a4.png"
                    alt="Ícone WhatsApp"
                    width={45}
                    height={45}
                  />
                  <h3>Facilidade de uso</h3>
                </div>
                <p>Interface simples e intuitiva diretamente no WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className="container text-center">
            <h2 className={styles.sectionTitle}>Mais informações</h2>
            <p className={styles.infoTextv}>
              Assista ao vídeo e conheça mais sobre o funcionamento do nosso
              ChatBot, desenvolvido especialmente para facilitar o dia a dia do
              agricultor com informações precisas e suporte inteligente.
            </p>

            {/* Vídeo responsivo */}
            <div
              className="ratio ratio-16x9 mt-4"
              style={{ maxWidth: "720px", margin: "0 auto" }}
            >
              <iframe
                src="https://www.youtube.com/embed/Dc_0qcpoDrY"
                title="Vídeo de apresentação"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
