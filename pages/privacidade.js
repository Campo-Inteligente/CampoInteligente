import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/NavbarVerde";
import Footer from "../components/Footer";
import styles from "../styles/Termos.module.css";

export default function PoliticaPrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Campo Inteligente</title>
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
          Política de Privacidade
        </motion.h2>

        <motion.div
          className={styles.formulario}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            A sua privacidade é importante para nós. É política do Campo
            Inteligente respeitar a sua privacidade em relação a qualquer
            informação sua que possamos coletar no site Campo Inteligente, e
            outros sites que possuímos e operamos.
          </p>

          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemos isso por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como os dados serão usados.
          </p>

          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>

          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>

          <p>
            Nosso site pode conter links para sites externos que não são
            operados por nós. Esteja ciente de que não temos controle sobre o
            conteúdo e práticas desses sites e não podemos aceitar
            responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <p>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>

          <p>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver qualquer dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contato conosco.
          </p>

          <h5>Seus Direitos</h5>
          <ul>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o
              direito de:
            </p>
            <li>Acessar os dados pessoais que coletamos sobre você;</li>
            <li>
              Solicitar a correção de informações incorretas, incompletas ou
              desatualizadas;
            </li>
            <li>
              Requerer a exclusão dos seus dados pessoais dos nossos registros,
              quando aplicável;
            </li>
            <li>Revogar o consentimento dado para o uso dos seus dados.</li>
          </ul>

          <h5 className="mt-4">Exclusão de Dados Pessoais</h5>
          <p>
            Se você deseja excluir seus dados pessoais dos nossos sistemas,
            basta enviar uma solicitação para o e-mail abaixo com o assunto{" "}
            <strong>"Exclusão de Dados"</strong>:
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

          <p>No corpo do e-mail, pedimos que inclua:</p>
          <ul>
            <li>Seu nome completo;</li>
            <li>O e-mail utilizado em nossos serviços;</li>
            <li>Uma descrição do dado que deseja excluir (opcional).</li>
          </ul>

          <p>
            Nos comprometemos a atender sua solicitação no prazo máximo de 15
            dias corridos, conforme estabelece a LGPD.
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
