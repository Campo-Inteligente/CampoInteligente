import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Sobre.module.css'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; 
export default function Sobre() {
 
  const membros = [
    {
      cargo: "Cientista de Dados",
      nome: "Abimael Soares",
      descricao: "Tem experiência em ciências de dados e atualmente cursa ciência da computação na UESC",
      imagem: "/imagens/abimael.jpeg"
    },
    {
      cargo: "Scrum Master",
      nome: "Arthur Martins",
      descricao: "Graduando em Sistemas Informações pela UESB, com experiência em back end e ciências de dados",
      imagem: "/imagens/arthur.jpg"
    },
    {
      cargo: "Desenvolvimento Mobile",
      nome: "Bruna Galiza",
      descricao: "Técnica em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia Baiano – Campus Santa Inês. Possui experiência prática em projetos voltados para tecnologia, comunicação e atendimento ao público.",
      imagem: "/imagens/bruna.jpg"
    },
    {
      cargo: "Desenvolvedor front end",
      nome: "Fabio Santos",
      descricao: "Técnico em Informática pelo IFBA, graduando em Sistemas de Informação pela UESB. Possui experiência em bancos de dados, desenvolvimento web, flutter e linguagens como Java e Python.",
      imagem: "/imagens/fabio.jpeg"
    },
    {
      cargo: "Desenvoldedora Fron end",
      nome: "Gisele Gomes",
      descricao: "Graduando em Sistemas de Informação pela Universidade Estadual da Bahia, tem experiência com desenvolvimento WEB e front end",
      imagem: "/imagens/gisele.jpg"
    },
    {
      cargo: "DEsenvolvedor mobile",
      nome: "João Victor",
      descricao: "Graduando em Sistemas de Informações pela Universidade Estadual do Sudoeste da Bahia.",
      imagem: "/imagens/joao.jpg"
    },
    {
      cargo: "Desenvolvedor back end",
      nome: "Juan Pablo",
      descricao: "Técnico em Informática pelo IFBA e graduando em Sistemas de Informação na UESB, com experiência em back-end e automação. Especialista em soluções inovadoras com Python, focadas em eficiência e análise de dados.",
      imagem: "/imagens/juan.jpg"
    },
    {
      cargo: "Gerente de projeto",
      nome: "Marcos Morais",
      descricao: "Dinâmico Gerente de Projetos de TI com mais de 15 anos de experiência, especializado em gerenciamento ágil e desenvolvimento de software usando tecnologias como C#, Python, PHP e bancos de dados relacionais, como Oracle e SQL Server. Bacharel em Sistemas de Informação, pós-graduado em Gestão de Tecnologia da Informação e Mestre em Ciência da Computação.",
      imagem: "/imagens/marcos.jpg"
    }
  ];

  return (
    <div className={styles.sobreContainer}>
      <Head>
        <title>Sobre Nós | Campo Inteligente</title>
        <meta name="description" content="Conheça nossa equipe e nossa missão" />
      </Head>
      
      <Navbar />
        
      <main>
        <section className={styles.intro}>
          <div className={styles.texto}>
            <h1>Colhendo soluções, Cultivando o Futuro.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo itaque, 
              accusantium ad ipsum praesentium quis amet atque quisquam impedit molestias.
            </p>
          </div>
          
          <div className={styles.imagemContainer}>
            <Image 
              src="/imagens/equipe.jpg" 
              alt="Nossa equipe" 
              className={styles.equipeImg}
              width={500}
              height={300}
              priority
            />
          </div>
        </section>
        
        <section className={styles.blocos}>
          <div className={`${styles.bloco} ${styles.missao}`}>
             <Image
             src="/imagens/missao.png"
             alt="missão"
             width={50}
             height={50}
             />
            <h2>Missão</h2>
            <p>
            Democratizar o acesso à tecnologia e à inteligência artificial para agricultores
                familiares, oferecendo informações estratégicas que otimizam a produtividade,
                reduzem riscos e promovem uma agricultura mais eficiente, sustentável e rentável.
            </p>
          </div>
          
          <div className={`${styles.bloco} ${styles.visao}`}>
          <Image
             src="/imagens/visão.png"
             alt="missão"
             width={50}
             height={50}
             />
            <h2>Visão</h2>
            <p>
            Ser a principal plataforma de suporte inteligente para a agricultura familiar,
                conectando tecnologia e inovação ao campo para transformar a tomada de decisões
                e impulsionar um agro mais produtivo, acessível e sustentável.
            </p>
          </div>
          
          <div className={`${styles.bloco} ${styles.valores}`}>
          <Image
             src="/imagens/valores.png"
             alt="missão"
             width={50}
             height={50}
             />
            <h2>Valores</h2>
            <p>
                Inovação, Acessibilidade  Sustentabilidade,Confiabilidade
                estratégicas no campo e Empoderamento.
            </p>
          </div>
        </section>
        
        <section className={styles.equipe}>
  <h2>Nossa equipe</h2>
  
  <div className={styles.membrosGrid}>
    {membros.map((membro, index) => (
      <div key={index} className={styles.cardMembro}>
        <div className={styles.cardEsquerda}>
          <Image
            src={membro.imagem}
            alt={membro.nome}
          layout="fill"
          objectFit="cover"
            className={styles.avatar}
          />
        </div>
        <div className={styles.cardDireita}>
          <h3>{membro.nome}</h3>
          <p className={styles.cargo}>{membro.cargo}</p>
          <p className={styles.descricao}>{membro.descricao}</p>
          <a href="#" className={styles.linkedin}>
            <img 
              src="/imagens/linkedin.png" 
              alt="LinkedIn" 
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
      </main>
      <Footer />
    </div>
    
  )
}