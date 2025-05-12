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
              Receba previsões climáticas, alertas de pragas e dicas de cultivo direto no seu celular. Fácil, rápido e do jeito que o agricultor precisa!
            </p>
          </motion.div>

          <div className={styles.mockupContainer}>
            {/* Versão desktop - mantém como estava */}
            <div className="d-none d-md-flex">
              <Image
                src="/imagens/c1.png"
                alt="Menu do ChatBot"
                width={320}
                height={650}
                className={styles.mockupImage}
              />
              <div className={styles.centerImageContainer}>
                <motion.a
                  href="/chatbot"
                  className={styles.chatbotBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ChatBot ↗
                </motion.a>
                <Image
                  src="/imagens/c2.png"
                  alt="Interação com usuário"
                  width={320}
                  height={650}
                  className={styles.mockupImage}
                  style={{ transform: "translateY(0px)", marginLeft: "50px" }}
                />
              </div>
              <Image
                src="/imagens/c3.png"
                alt="Solução recomendada"
                width={320}
                height={650}
                className={styles.mockupImage}
                style={{ marginLeft: "-180px" }}
              />
            </div>

           {/* Versão mobile - carrossel ajustado */}
<div className="d-md-none w-100">
  {/* Botão do ChatBot */}
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
  <div style={{ 
    position: 'relative', 
    margin: '0 auto', 
    maxWidth: '340px',
    paddingBottom: '30px' /* Espaço para os indicadores */
  }}>
    <div id="chatbotCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {['c1', 'c2', 'c3'].map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className={styles.carouselImageContainer}>
              <Image
                src={`/imagens/${img}.png`}
                alt={index === 0 ? "Menu do ChatBot" : index === 1 ? "Interação com usuário" : "Solução recomendada"}
                width={340}
                height={650}
                className={styles.carouselImage}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Indicadores em bolinhas verdes */}
    <div className={`carousel-indicators ${styles.carouselIndicators}`}>
      {[0, 1, 2].map((index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#chatbotCarousel"
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
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
                  Informações meteorológicas precisas para ajudar no planejamento das suas atividades agrícolas.
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
                  Receba notificações sobre surtos de pragas em sua região e recomendações de controle.
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
                  Dados atualizados sobre preços de commodities e tendências de mercado.
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
                  Projeções de produtividade baseadas em condições climáticas e histórico da sua região.
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
                  Obtenha respostas instantâneas sem necessidade de pesquisas demoradas.
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
                  Informações precisas para ajudar você a tomar as melhores decisões.
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
              Nosso ChatBot foi desenvolvido com tecnologia de ponta para atender às necessidades específicas do agricultor brasileiro
              Com atualizações constantes e suporte especializado, garantimos a qualidade e confiabilidade das informações fornecidas.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}