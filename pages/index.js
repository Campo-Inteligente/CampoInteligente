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

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setIsScrolled(window.scrollY > 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Campo Inteligente</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.mainContent}>
        <section className={`${styles.hero} position-relative`}>
          <Navbar isScrolled={isScrolled} />
          <div className={`${styles.overlay}`}></div>

          <div
            className={`container h-100 d-flex align-items-center ${styles.contentWrapper}`}
          >
            <div className="row w-100 align-items-center justify-content-center text-center">
              {/* Coluna do Logo */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="col-xl-4 col-lg-5 col-md-6 order-1 mb-4 mb-md-0"
              >
                <div className={`${styles.logoContainer}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="/imagens/1.png"
                      alt="Campo Inteligente"
                      width={400}
                      height={100}
                      className="img-fluid mt-1 pt-5 ms-5"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Ícones Sociais (Mobile) - ENTRE LOGO E BOTÃO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="col-12 d-flex d-lg-none mb-4 justify-content-center order-2"
              >
                <div className={`${styles.socialIcons} d-flex gap-4`}>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Coluna do Conteúdo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="col-xl-5 col-lg-6 col-md-8 order-3 order-lg-2"
              >
                <div className="text-center px-3 px-md-0">
                  <motion.a
                    href="#"
                    className={`${styles.btn} btn-lg d-inline-flex align-items-center justify-content-center`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    Conheça nosso ChatBot <span className="ms-3">→</span>
                  </motion.a>
                  <motion.p
                    className={`${styles.description} mt-5 mb-5`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Somos uma plataforma inovadora que coloca a tecnologia a
                    serviço do agricultor familiar. Com inteligência artificial
                    integrada a dados meteorológicos e de mercado, oferecemos
                    uma ferramenta simples, eficiente e acessível para otimizar
                    o plantio, o manejo das lavouras e a colheita. Tudo isso na
                    palma da sua mão, direto pelo WhatsApp, para que você tome
                    decisões estratégicas e maximize seus lucros com segurança e
                    praticidade!
                  </motion.p>
                </div>
              </motion.div>

              {/* Ícones Sociais (Desktop) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-xl-1 col-lg-1 order-4 d-none d-lg-flex justify-content-end"
              >
                <div className={`${styles.socialIcons} vstack gap-4`}>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
