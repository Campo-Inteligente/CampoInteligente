import Head from "next/head";
import Navbar from "../components/NavbarVerde"; // Usando a Navbar verde para consistência
import Footer from "../components/Footer";
import ChatInterface from "../components/ChatInterface";
import styles from "../styles/chat-online.module.css";
import { motion } from "framer-motion"; // 1. Importe o 'motion'

export default function ChatOnline() {
  return (
    <>
      <Head>
        <title>Chat Online | Campo Inteligente</title>
        <meta
          name="description"
          content="Interaja com nossa assistente virtual Iagro e tire suas dúvidas sobre o agronegócio."
        />
      </Head>

      <main
        className={styles.container}
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="position-relative d-flex flex-column align-items-center"
          style={{ zIndex: 2 }}
        >
          <h1 className={styles.titulo}>Converse com a Iagro</h1>
          <p
            style={{
              color: "#333",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            Faça perguntas sobre clima, planejamento de safra ou qualquer outra
            dúvida agrícola.
          </p>

          <ChatInterface />
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
