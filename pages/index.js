import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/**
 * 2025.04.18 17h32 - Marcos Morais. Componente principal da página inicial.
 * Renderiza a seção de destaque (hero), a navegação e o rodapé.
 */
export default function Home() {
  /**
   * 2025.04.18 17h32 - Marcos Morais. Estado para controlar se a página foi rolada.
   * Usado para alterar o estilo da Navbar ao rolar.
   */
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * 2025.04.18 17h32 - Marcos Morais. Hook de efeito para adicionar e remover um listener de evento de scroll.
   * Atualiza o estado 'isScrolled' com base na posição vertical da rolagem.
   */
  useEffect(() => {
    /**
     * 2025.04.18 17h32 - Marcos Morais. Função para verificar a posição da rolagem e atualizar o estado.
     * Utiliza requestAnimationFrame para otimizar a atualização do estado, garantindo melhor performance.
     */
    const handleScroll = () => {
      requestAnimationFrame(() => setIsScrolled(window.scrollY > 100));
    };

    // 2025.04.18 17h32 - Marcos Morais. Adiciona o listener de evento de scroll à janela.
    window.addEventListener("scroll", handleScroll);

    // 2025.04.18 17h32 - Marcos Morais. Função de limpeza para remover o listener de evento ao desmontar o componente.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 2025.04.18 17h32 - Marcos Morais. Configurações do Head do Next.js para metadados da página. */}
      
      <Head>
        <title>Campo Inteligente | Chatbot para o Agronegócio com Inteligência Artificial</title>
        <meta name="description" content="A Campo Inteligente é uma plataforma com chatbot via WhatsApp que usa inteligência artificial para otimizar o agronegócio familiar com dados climáticos e de mercado." />
        <meta name="keywords" content="agronegócio, chatbot, inteligência artificial, IA no campo, agricultura familiar, clima, mercado agrícola, WhatsApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Campo Inteligente | Chatbot com IA para o Agronegócio" />
        <meta property="og:description" content="Plataforma inteligente que oferece suporte ao agricultor familiar via chatbot com IA." />
        {/* recomendo uma imagem em /public/imagens/og-image.jpg (1200x630) para o Open Graph e redes sociais. */}
        <meta property="og:image" content="/imagens/og-image.jpg" />
        <meta property="og:url" content="https://www.campointeligente.agr.br/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.campointeligente.agr.br/" />
      </Head>
 
      {/* 2025.04.18 17h32 - Marcos Morais. Conteúdo principal da página. */}
      <main className={styles.mainContent}>
        {/* 2025.04.18 17h32 - Marcos Morais. Seção principal da página inicial (hero section). */}
        <section className={`${styles.hero} position-relative`}>
          {/* 2025.04.18 17h32 - Marcos Morais. Componente de navegação, que recebe o estado de rolagem para estilização. */}
          <Navbar isScrolled={isScrolled} />
          {/* 2025.04.18 17h32 - Marcos Morais. Camada de overlay para aplicar um efeito visual sobre a imagem de fundo (se houver). */}
          <div className={`${styles.overlay}`}></div>

          {/* 2025.04.18 17h32 - Marcos Morais. Container principal do conteúdo da seção hero, centralizando os elementos. */}
          <div className={`container h-100 d-flex align-items-center ${styles.contentWrapper}`}>
            <div className="row w-100 align-items-center justify-content-center text-center">
              {/* 2025.04.18 17h32 - Marcos Morais. Logo para dispositivos móveis, visível apenas em telas pequenas. */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="col-12 order-1 mb-4 text-start d-block d-lg-none ps-sm-5"
              >
                <div className={`${styles.logoContainer}`}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Image
                      src="/imagens/1.png"
                      alt="Campo Inteligente"
                      width={200}
                      height={200}
                      className="img-fluid mt-1 pt-3"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* 2025.04.18 17h32 - Marcos Morais. Logo para dispositivos desktop, visível em telas médias e grandes. */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="col-xl-4 col-lg-5 order-1 mb-4 mb-md-0 d-none d-lg-block"
              >
                <div className={`${styles.logoContainer}`}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Image
                      src="/imagens/1.png"
                      alt="Campo Inteligente"
                      width={450}
                      height={400}
                      className="img-fluid mt-1 pt-lg-5 ms-lg-5"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* 2025.04.18 17h32 - Marcos Morais. Ícones sociais para dispositivos móveis, exibidos abaixo do conteúdo principal. */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="col-12 d-flex d-lg-none mb-4 justify-content-center order-2"
              >
                <div className={`${styles.socialIcons} d-flex gap-4`}>
                  <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </motion.a>
                  <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </motion.a>
                  <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </motion.a>
                </div>
              </motion.div>

              {/* 2025.04.18 17h32 - Marcos Morais. Conteúdo principal da seção hero para dispositivos móveis. */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="col-12 order-3 text-center px-sm-3 d-block d-lg-none"
              >
                <motion.a
                  href="#"
                  className={`${styles.btn} btn-lg d-inline-flex align-items-center justify-content-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Conheça nosso ChatBot <span className="ms-3">→</span>
                </motion.a>
                <motion.p
                  className={`${styles.description} mt-5 mb-5`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Somos uma plataforma inovadora que coloca a tecnologia a serviço do agricultor familiar. Com inteligência artificial integrada a dados meteorológicos e de mercado, oferecemos uma ferramenta simples, eficiente e acessível para otimizar o plantio, o manejo das lavouras e a colheita. Tudo isso na palma da sua mão, direto pelo WhatsApp, para que você tome decisões estratégicas e maximize seus lucros com segurança e praticidade!
                </motion.p>
              </motion.div>

              {/* 2025.04.18 17h32 - Marcos Morais. Conteúdo principal da seção hero para dispositivos desktop. */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="col-xl-5 col-lg-6 col-md-8 order-3 order-lg-2 mt-lg-5 me-lg-5"
              >
                <div className="text-center text-lg-start px-md-0">
                  <motion.a
                    href="#"
                    className={`${styles.btn} btn-lg d-inline-flex align-items-center justify-content-center mb-4`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Conheça nosso ChatBot <span className="ms-3">→</span>
                  </motion.a>
                  <motion.p
                    className={`${styles.description} mt-lg-5`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Somos uma plataforma inovadora que coloca a tecnologia a serviço do agricultor familiar. Com inteligência artificial integrada a dados meteorológicos e de mercado, oferecemos uma ferramenta simples, eficiente e acessível para otimizar o plantio, o manejo das lavouras e a colheita. Tudo isso na palma da sua mão, direto pelo WhatsApp, para que você tome decisões estratégicas e maximize seus lucros com segurança e praticidade!
                  </motion.p>
                </div>
              </motion.div>

              {/* 2025.04.18 17h32 - Marcos Morais. Ícones sociais fixos na lateral direita para dispositivos desktop. */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="d-none d-lg-flex flex-column gap-4 position-fixed end-0 top-50 translate-middle-y pe-3"
                style={{ zIndex: 999 }}
              >
                <div className={`${styles.socialIcons} vstack gap-4`}>
                  <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </motion.a>
                  <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </motion.a>
                  <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* 2025.04.18 17h32 - Marcos Morais. Componente de rodapé da página. */}
      <Footer />
    </>
  );
}