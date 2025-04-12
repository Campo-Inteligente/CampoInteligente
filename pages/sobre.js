import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Sobre.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';

export default function Sobre() {
  const membros = [
    {
      cargo: "Desenvolvedor",
      nome: "Abimael Soares",
      descricao:
        "Graduando em Ciências da Computação pelo Instituto Federal de Educação, Ciências e Tecnologia da Bahia,IFBA, tem experiência com as linguagens java, python, C e com desenvolvimento back-end e automação de tarefas.",
      imagem: "/imagens/abimael.jpeg",
      linkedin:
        "https://www.linkedin.com/in/abimael-uanderson/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      cargo: "CEO",
      nome: "Arthur Martins",
      descricao:
        "Scrum Master com foco em gestão de projetos. Graduando em Sistemas de Informação pela UESB, com experiência em desenvolvimento mobile e análise de dados, impulsionando a otimização de processos e a tomada de decisões estratégicas.",
      imagem: "/imagens/arthurrr.jpg",
      linkedin: "https://www.linkedin.com/in/arthur-martins-510b36235/",
    },
    {
      cargo: "CMO",
      nome: "Bruna Queiroz",
      descricao:
        "Técnica em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia Baiano – Campus Santa Inês. Possui experiência prática em projetos voltados para tecnologia, comunicação e atendimento ao público.",
      imagem: "/imagens/bruna.jpg",
      linkedin: "https://www.linkedin.com/in/bruna-queiroz-5422a7261/",
    },
    {
      cargo: "Desenvolvedor",
      nome: "Fabio Santos",
      descricao:
        "Técnico em Informática pelo IFBA, graduando em Sistemas de Informação pela UESB. Com experiências em designer gráfico, por meio dos programas Photoshop e Corel Draw, já trabalhou com as linguagens java, python e C, além dos frameworks flutter e next.js.",
      imagem: "/imagens/fabio.jpeg",
      linkedin: "https://www.linkedin.com/in/fabio-santos-frutuoso-1784401b9/",
    },
    {
      cargo: "CTO",
      nome: "Gisele Gomes",
      descricao:
        "UI/UX Designer e Desenvolvedora Front-End. Técnica em Informática pelo IFBA e graduanda em Sistemas de Informação pela UESB, experiente em Figma, React Native e Next.js para criar interfaces intuitivas e experiências digitais envolventes.",
      imagem: "/imagens/gisele1.jpg",
      linkedin: "https://www.linkedin.com/in/gisele-gomes-oliveira-037bb1128/",
    },
    {
      cargo: "CFO",
      nome: "João Victor",
      descricao:
        "Bacharelando em Sistemas de Informação pela UESB.  Atuando profissionalmente na área de Ciência de Dados. Com experiência em análise de dados e com habilidades em ferramentas como SQL e Power BI, Python para análise e ciência de dados.",
      imagem: "/imagens/joao2.jpg",
      linkedin:
        "https://www.linkedin.com/in/jo%C3%A3o-victor-oliveira-santos-3b8aa1203/",
    },
    {
      cargo: "CTO",
      nome: "Juan Pablo",
      descricao:
        "Desenvolvedor Back-End com foco em automação e processamento de dados. Técnico pelo IFBA e graduando em Sistemas de Informação, possui experiência IA e Python para criar soluções inteligentes.",
      imagem: "/imagens/juan.jpg",
      linkedin: "https://www.linkedin.com/in/marcosmoraisjr/",
    },
    {
      cargo: "Gerente de Projetos",
      nome: "Marcos Morais",
      descricao:
        "Mestre em Ciência da Computação, com especialização em Visão Computacional e IA aplicada à área médica. Pós-graduado em Gestão de TI e Bacharel em Sistemas de Informação, atuando desde 1995 com tecnologia e inovação",
      imagem: "/imagens/marcos.jpg",
      linkedin: "https://www.linkedin.com/in/marcosmoraisjr/",
    },
  ];

  return (
    <div className={styles.sobreContainer}>
      <Head>
        <title>Sobre Nós | Campo Inteligente</title>
        <meta name="description" content="Conheça nossa equipe e nossa missão" />
      </Head>
      
      <div className={styles.navbar}>
        <Navbar />
      </div>

      <main className={styles.mainContent}>
        {/* Seção Intro */}
        <Container className={`${styles.intro} my-5 py-4`}>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className={styles.tituloPrincipal}>Colhendo soluções, Cultivando o Futuro.</h1>
                <p className={styles.textoDescricao}>
                Na Campo Inteligente, unimos tecnologia e inovação para transformar o agronegócio. Nosso chatbot utiliza IA e APIs avançadas para fornecer previsões do tempo, recomendações de cultivo e respostas precisas para suas dúvidas. Com dados confiáveis na palma da sua mão, você toma decisões mais estratégicas e garante uma colheita mais produtiva. Cultive com inteligência, colha com eficiência!
                </p>
              </motion.div>
            </Col>

            <Col lg={6} className="text-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/imagens/equipe.jpg"
                  alt="Nossa equipe"
                  width={600}
                  height={400}
                  className={`img-fluid ${styles.equipeImg}`}
                  priority
                  layout="responsive"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>

      {/* Seção Missão, Visão e Valores */}
<Container className={`${styles.blocosContainer} my-5`}>
  {/* Versão Desktop */}
  <Row className="d-none d-lg-flex flex-column" style={{ gap: '40px' }}>
    {/* Missão - Alinhado à esquerda */}
    <Col lg={7} className="align-self-start">
      <motion.div
        className={`${styles.bloco} ${styles.missao}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.tituloComIcone}>
          <Image src="/imagens/missao.png" alt="Missão" width={50} height={50} />
          <h2>Missão</h2>
        </div>
        <p className={styles.textoBloco}>
          Democratizar o acesso à tecnologia e à inteligência artificial para agricultores familiares, oferecendo informações estratégicas que otimizam a produtividade, reduzem riscos e promovem uma agricultura mais eficiente, sustentável e rentável.
        </p>
      </motion.div>
    </Col>

    {/* Visão - Alinhado à direita */}
    <Col lg={7} className="align-self-end">
      <motion.div
        className={`${styles.bloco} ${styles.visao}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.tituloComIcone}>
          <Image src="/imagens/visão.png" alt="Visão" width={50} height={50} />
          <h2>Visão</h2>
        </div>
        <p className={styles.textoBloco}>
          Ser a principal plataforma de suporte inteligente para a agricultura familiar, conectando tecnologia e inovação ao campo para transformar a tomada de decisões e impulsionar um agro mais produtivo, acessível e sustentável.
        </p>
      </motion.div>
    </Col>

    {/* Valores - Alinhado à esquerda e texto centralizado */}
    <Col lg={7} className="align-self-start">
      <motion.div
        className={`${styles.bloco} ${styles.valores}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className={styles.tituloComIcone}>
          <Image src="/imagens/valores.png" alt="Valores" width={50} height={50} />
          <h2>Valores</h2>
        </div>
        <div className={styles.conteudoValores}>
          <ul className={styles.listaValores}>
            <li>Inovação</li>
            <li>Acessibilidade</li>
            <li>Sustentabilidade</li>
            <li>Empoderamento</li>
          </ul>
        </div>
      </motion.div>
    </Col>
  </Row>

  {/* Versão Mobile */}
  <Row className="d-lg-none g-4">
    <Col md={12}>
      <motion.div
        className={`${styles.bloco} ${styles.missao}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.tituloComIcone}>
          <Image src="/imagens/missao.png" alt="Missão" width={50} height={50} />
          <h2>Missão</h2>
        </div>
        <p className={styles.textoBloco}>
          Democratizar o acesso à tecnologia e à inteligência artificial para agricultores familiares, oferecendo informações estratégicas que otimizam a produtividade, reduzem riscos e promovem uma agricultura mais eficiente, sustentável e rentável.
        </p>
      </motion.div>
    </Col>

    <Col md={12}>
      <motion.div
        className={`${styles.bloco} ${styles.visao}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.tituloComIcone}>
          <Image src="/imagens/visão.png" alt="Visão" width={50} height={50} />
          <h2>Visão</h2>
        </div>
        <p className={styles.textoBloco}>
          Ser a principal plataforma de suporte inteligente para a agricultura familiar, conectando tecnologia e inovação ao campo para transformar a tomada de decisões e impulsionar um agro mais produtivo, acessível e sustentável.
        </p>
      </motion.div>
    </Col>

    <Col md={12}>
      <motion.div
        className={`${styles.bloco} ${styles.valores}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className={styles.tituloComIcone}>
          <Image src="/imagens/valores.png" alt="Valores" width={50} height={50} />
          <h2>Valores</h2>
        </div>
        <div className={styles.conteudoValores}>
          <ul className={styles.listaValores}>
            <li>Inovação</li>
            <li>Acessibilidade</li>
            <li>Sustentabilidade</li>
            <li>Empoderamento</li>
          </ul>
        </div>
      </motion.div>
    </Col>
  </Row>
</Container>

{/* Seção Equipe */}
<Container className={`${styles.equipe} my-5 py-4`}>
<h2 className={`text-center mb-5 ${styles.tituloEquipe}`}>Nossa Equipe</h2>
  <Row className="g-4">
    {membros.map((membro, index) => (
      <Col key={index} lg={6} className="d-flex justify-content-center">
        <motion.div
          className={styles.cardMembro}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.cardEsquerda}>
  <div className={styles.imagemWrapper}>
    <Image
      src={membro.imagem}
      alt={membro.nome}
      fill 
      className={styles.avatar}
      style={{
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
  </div>
  <motion.a
    href={membro.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.linkedinBtn}
    whileHover={{ scale: 1.1 }}
  >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
          </div>
          <div className={styles.cardDireita}>
            <h3>{membro.nome}</h3>
            <p className={styles.cargo}>{membro.cargo}</p>
            <p className={styles.descricao}>{membro.descricao}</p>
          </div>
        </motion.div>
      </Col>
    ))}
  </Row>
</Container>
  
 
      </main>

      <Footer />
    </div>
  );
}