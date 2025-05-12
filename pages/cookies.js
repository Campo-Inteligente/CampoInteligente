import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/NavbarVerde";
import Footer from "../components/Footer";
import styles from "../styles/Termos.module.css";

export default function PoliticaCookies() {
  return (
    <>
      <Head>
        <title>Política de Cookies | Campo Inteligente</title>
      </Head>

      <main className={styles.container}>
        <Navbar />
        <motion.h2
          className={styles.titulo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Política de Cookies
        </motion.h2>

        <motion.div
          className={styles.formulario}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* conteúdo do texto permanece inalterado */}
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
