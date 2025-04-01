import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Sobre.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Sobre() {
  const membros = [
    {
      cargo: "Cientista de Dados",
      nome: "Abimael Soares",
      descricao:
        "Tem experiência em ciências de dados e atualmente cursa ciência da computação na UESC",
      imagem: "/imagens/abimael.jpeg",
    },
    {
      cargo: "Scrum Master",
      nome: "Arthur Martins",
      descricao:
        "Scrum Master com foco em gestão de projetos. Graduando em Sistemas de Informação pela UESB, com experiência em desenvolvimento mobile e análise de dados, impulsionando a otimização de processos e a tomada de decisões estratégicas.",
      imagem: "/imagens/arthur.jpg",
    },
    {
      cargo: "Analista de Cloud",
      nome: "Bruna Queiroz",
      descricao:
        "Técnica em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia Baiano – Campus Santa Inês. Possui experiência prática em projetos voltados para tecnologia, comunicação e atendimento ao público.",
      imagem: "/imagens/bruna.jpg",
    },
    {
      cargo: "Desenvolvedor front end",
      nome: "Fabio Santos",
      descricao:
        "Técnico em Informática pelo IFBA, graduando em Sistemas de Informação pela UESB",
      imagem: "/imagens/fabio.jpeg",
    },
    {
      cargo: "Desenvoldedora Front-End",
      nome: "Gisele Gomes",
      descricao:
        "UI/UX Designer e Desenvolvedora Front-End. Técnica em Informática pelo IFBA e graduanda em Sistemas de Informação pela UESB, experiente em Figma, React Native e Next.js para criar interfaces intuitivas e experiências digitais envolventes.",
      imagem: "/imagens/gisele1.jpg",
    },
    {
      cargo: "DEsenvolvedor mobile",
      nome: "João Victor",
      descricao:
        "Bacharelando em Sistemas de Informação pela UESB.  Atuando profissionalmente na área de Ciência de Dados. Com experiência em análise de dados e com habilidades em ferramentas como SQL e Power BI, Python para análise e ciência de dados.",
      imagem: "/imagens/joao2.jpg",
    },
    {
      cargo: "Desenvolvedor Back-End",
      nome: "Juan Pablo",
      descricao:
        "Desenvolvedor Back-End com foco em automação e processamento de dados. Técnico pelo IFBA e graduando em Sistemas de Informação, possui experiência IA e Python para criar soluções inteligentes.",
      imagem: "/imagens/juan.jpg",
    },
    {
      cargo: "Gerente de Projetos",
      nome: "Marcos Morais",
      descricao:
        "Mestre em Ciência da Computação, com especialização em Visão Computacional e IA aplicada à área médica. Pós-graduado em Gestão de TI e Bacharel em Sistemas de Informação, atuando desde 1995 com tecnologia e inovação",
      imagem: "/imagens/marcos.jpg",
    },
  ];

  return (
    <div className={styles.sobreContainer}>
      <Head>
        <title>Sobre Nós | Campo Inteligente</title>
        <meta
          name="description"
          content="Conheça nossa equipe e nossa missão"
        />
      </Head>
      <Navbar />

      <main>
        <section className={styles.intro}>
          <motion.div
            className={styles.texto}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Colhendo soluções, Cultivando o Futuro.</h1>
            <p>
              Na Campo Inteligente, unimos tecnologia e inovação para
              transformar o agronegócio. Nosso chatbot utiliza IA e APIs
              avançadas para fornecer previsões do tempo, recomendações de
              cultivo e respostas precisas para suas dúvidas. Com dados
              confiáveis na palma da sua mão, você toma decisões mais
              estratégicas e garante uma colheita mais produtiva. Cultive com
              inteligência, colha com eficiência!
            </p>
          </motion.div>

          <motion.div
            className={styles.imagemContainer}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/imagens/equipe.jpg"
              alt="Nossa equipe"
              className={styles.equipeImg}
              width={500}
              height={300}
              priority
            />
          </motion.div>
        </section>

        <section className={styles.blocos}>
          <motion.div
            className={`${styles.bloco} ${styles.missao}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.tituloComIcone}>
              <Image
                src="/imagens/missao.png"
                alt="missão"
                width={50}
                height={50}
                className={styles.iconeBloco}
              />
              <h2>Missão</h2>
            </div>
            <p>
              Democratizar o acesso à tecnologia e à inteligência artificial
              para agricultores familiares, oferecendo informações estratégicas
              que otimizam a produtividade, reduzem riscos e promovem uma
              agricultura mais eficiente, sustentável e rentável.
            </p>
          </motion.div>

          <motion.div
            className={`${styles.bloco} ${styles.visao}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.tituloComIcone}>
              <Image
                src="/imagens/visão.png"
                alt="visão"
                width={50}
                height={50}
                className={styles.iconeBloco}
              />
              <h2>Visão</h2>
            </div>
            <p>
              Ser a principal plataforma de suporte inteligente para a
              agricultura familiar, conectando tecnologia e inovação ao campo
              para transformar a tomada de decisões e impulsionar um agro mais
              produtivo, acessível e sustentável.
            </p>
          </motion.div>

          <motion.div
            className={`${styles.bloco} ${styles.valores}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.tituloComIcone}>
              <Image
                src="/imagens/valores.png"
                alt="valores"
                width={50}
                height={50}
                className={styles.iconeBloco}
              />
              <h2>Valores</h2>
            </div>
            <p>
              • Inovação • Acessibilidade • Sustentabilidade • Confiabilidade
              Estratégicas no campo e Empoderamento
            </p>
          </motion.div>
        </section>

        <section className={styles.equipe}>
          <h2>Nossa equipe</h2>

          <div className={styles.membrosGrid}>
            {membros.map((membro, index) => (
              <motion.div
                key={index}
                className={styles.cardMembro}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={styles.cardEsquerda}>
                  <Image
                    src={membro.imagem}
                    alt={membro.nome}
                    layout="fill"
                    objectFit="cover"
                    className={styles.avatar}
                  />
                  <motion.a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinBtn}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </motion.a>
                </div>
                <div className={styles.cardDireita}>
                  <h3>{membro.nome}</h3>
                  <p className={styles.cargo}>{membro.cargo}</p>
                  <p className={styles.descricao}>{membro.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
