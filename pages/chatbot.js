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
        {/* Seção principal com texto e imagem */}
        <section
          className={`${styles.introducao} container d-flex flex-column align-items-center text-center`}
        >
          <Navbar />

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            <h2 className={styles.titulo}>Otimize sua produção agrícola com o nosso ChatBot no WhatsApp!</h2>
            <p className={styles.subtitulo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.mockupContainer}
          >
            <Image
              src="/imagens/c1.png"
              alt="Chatbot tela 1"
              width={600}
              height={600}
              className={styles.mockupImage}
            />
            <Image
              src="/imagens/c2.png"
              alt="Chatbot tela 2"
              width={600}
              height={600}
              className={styles.mockupImage}
            />
            <Image
              src="/imagens/c3.png"
              alt="Chatbot tela 3"
              width={600}
              height={600}
              className={styles.mockupImage}
            />
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
