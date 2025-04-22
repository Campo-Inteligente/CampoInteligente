import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/NavbarVerde";
import Footer from "../components/Footer";
import styles from "../styles/Termos.module.css";

export default function Termos() {
  return (
    <>
      <Head>
        <title>Termos de Uso | Campo Inteligente</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.container}>
        <Navbar />
        <motion.h2
          className={styles.titulo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Termos de Uso
        </motion.h2>

        <motion.div
          className={styles.formulario}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundColor: "#f1f8f4", color: "#333" }}
        >
          <p>
            Ao acessar o site Campo Inteligente, você concorda em cumprir estes
            termos de serviço, todas as leis e regulamentos aplicáveis, e
            concorda que é responsável pelo cumprimento de todas as leis locais
            aplicáveis.
          </p>

          <h5 className="mt-4">Uso Aceitável</h5>
          <ul>
            <p>Você concorda em não usar este site para:</p>
            <li>
              Praticar atividades ilegais ou contrárias à boa fé e à ordem
              pública;
            </li>
            <li>
              Difundir conteúdo ilegal, ofensivo, racista, xenofóbico ou que
              viole os direitos humanos;
            </li>
            <li>
              Causar danos ao site, a seus sistemas, ou disseminar vírus ou
              qualquer outro software malicioso.
            </li>
          </ul>

          <h5 className="mt-4">Direitos Autorais</h5>
          <p>
            O conteúdo do site, incluindo textos, imagens, gráficos e logotipos,
            são de propriedade do Campo Inteligente ou de seus licenciadores, e
            são protegidos por leis de direitos autorais e marcas comerciais.
          </p>

          <h5 className="mt-4">Modificações</h5>
          <p>
            Podemos revisar estes termos de uso a qualquer momento sem aviso
            prévio. Ao usar este site você concorda em ficar vinculado à versão
            atual desses termos.
          </p>

          <h5 className="mt-4">Contato</h5>
          <p>
            Em caso de dúvidas, entre em contato pelo e-mail: 📩{" "}
            <a
              href="mailto:startupcampointeligente@gmail.com"
              className="text-success fw-semibold"
            >
              startupcampointeligente@gmail.comcl
            </a>
          </p>

          <p className="text-muted mt-3">
            Última atualização: 07 de abril de 2025
          </p>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
