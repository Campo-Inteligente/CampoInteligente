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
          Política de Cookies
        </motion.h2>

        <motion.div
          className={styles.formulario}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            Queremos ser transparentes com você. Esta Política de Cookies explica como o site Campo
            Inteligente utiliza cookies e tecnologias semelhantes para melhorar sua experiência conosco.
          </p>

          <h5>O que são cookies?</h5>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita
            um site. Eles servem para lembrar suas preferências, entender como você interage com nosso
            conteúdo e oferecer uma navegação mais personalizada.
          </p>

          <h5>Como usamos os cookies?</h5>
          <p>Utilizamos cookies para:</p>
          <ul>
            <li>Lembrar suas preferências e configurações;</li>
            <li>Coletar dados de navegação para entender como nosso site está sendo usado;</li>
            <li>Oferecer conteúdo relevante e anúncios personalizados (quando aplicável);</li>
            <li>Melhorar constantemente nossos serviços e funcionalidades.</li>
          </ul>

          <h5>Tipos de cookies que utilizamos:</h5>
          <ul>
            <li><strong>Essenciais:</strong> necessários para o funcionamento do site, como autenticação e segurança.</li>
            <li><strong>De desempenho:</strong> nos ajudam a entender como os visitantes usam o site, permitindo otimizar sua experiência.</li>
            <li><strong>Funcionais:</strong> lembram suas escolhas anteriores (como idioma ou localização).</li>
            <li><strong>De publicidade:</strong> usados para apresentar anúncios mais relevantes para você, com base nos seus interesses.</li>
          </ul>

          <h5>Você pode controlar o uso de cookies</h5>
          <p>
            Ao acessar nosso site, você pode aceitar ou recusar o uso de cookies não essenciais. A maioria
            dos navegadores também permite que você gerencie os cookies nas configurações – bloqueando,
            apagando ou alertando sempre que eles estiverem sendo usados.
          </p>

          <h5>Links para sites externos</h5>
          <p>
            Nosso site pode conter links para outras páginas da web. Não nos responsabilizamos pelas práticas
            de cookies desses sites externos. Recomendamos que você leia as políticas específicas ao acessá-los.
          </p>

          <h5>Atualizações desta política</h5>
          <p>
            Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças tecnológicas
            ou legais. A data da última atualização estará sempre disponível abaixo.
          </p>

          <h5>Dúvidas?</h5>
          <p>
            Se tiver qualquer dúvida sobre o uso de cookies em nosso site, entre em contato conosco pelo e-mail:
          </p>

          <p>
            📩{" "}
            <a
              href="mailto:startupcampointeligente@gmail.com"
              className="text-success fw-semibold"
            >
             startupcampointeligente@gmail.com
            </a>
          </p>

          <p className="text-muted mt-3">Última atualização: 07 de abril de 2025</p>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}