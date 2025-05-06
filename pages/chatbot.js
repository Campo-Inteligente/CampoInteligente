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
        <section className={`${styles.introducao} container d-flex flex-column align-items-center text-center`}>
          <Navbar />

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={styles.titulo}>Otimize sua produção agrícola com o nosso ChatBot no WhatsApp!</h2>
            <p className={styles.subtitulo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          <div className={styles.mockupContainer}>
            <Image
              src="/imagens/c1.png"
              alt="Menu do ChatBot"
              width={320}
              height={650}
              className={styles.mockupImage}
              style={{marginRight:'-90px'}}
            />
            <Image
              src="/imagens/c2.png"
              alt="Interação com usuário"
              width={320}
              height={650}
              className={styles.mockupImage}
              style={{ transform: 'translateY(50px)',
                 marginLeft:'-50px' }}
              
            />
            <Image
              src="/imagens/c3.png"
              alt="Solução recomendada"
              width={320}
              height={650}
              className={styles.mockupImage}
              style={{marginLeft:'-250px'}}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}