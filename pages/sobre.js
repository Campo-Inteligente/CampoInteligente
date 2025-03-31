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
      cargo: "Analista de Cloud",
      nome: "Bruna Queiroz",
      descricao: "Técnica em Informática pelo IF Baiano, com experiência em comunicação e atendimento ao público.",
      imagem: "/imagens/bruna.jpg"
    },
    {
      cargo: "Desenvolvedor front end",
      nome: "Fabio Santos",
      descricao: "Técnico em Informática pelo IFBA, graduando em Sistemas de Informação pela UESB",
      imagem: "/imagens/fabio.jpeg"
    },
    {
      cargo: "Desenvoldedora Fron end",
      nome: "Gisele Gomes",
      descricao: "Graduando em Sistemas de Informação pela UESB e desenvolvedora front-end.",
      imagem: "/imagens/gisele.jpg"
    },
    {
      cargo: "DEsenvolvedor mobile",
      nome: "João Victor",
      descricao: "Graduando em Sistemas de Informações pela UESB.",
      imagem: "/imagens/joao.jpg"
    },
    {
      cargo: "Desenvolvedor back end",
      nome: "Juan Pablo",
      descricao: "Técnico em Informática pelo IFBA e graduando em SI na UESB.",
      imagem: "/imagens/juan.jpg"
    },
    {
      cargo: "Gerente de projeto",
      nome: "Marcos Morais",
      descricao: "Dinâmico Gerente de Projetos de TI com mais de 15 anos de experiência.",
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
      Democratizar o acesso à tecnologia e à inteligência artificial para agricultores
      familiares, oferecendo informações estratégicas que otimizam a produtividade,
      reduzem riscos e promovem uma agricultura mais eficiente, sustentável e rentável.
    </p>
  </div>
  
  <div className={`${styles.bloco} ${styles.visao}`}>
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
      Ser a principal plataforma de suporte inteligente para a agricultura familiar,
      conectando tecnologia e inovação ao campo para transformar a tomada de decisões
      e impulsionar um agro mais produtivo, acessível e sustentável.
    </p>
  </div>
  
  <div className={`${styles.bloco} ${styles.valores}`}>
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
•	Inovação
•	Acessibilidade
•	Sustentabilidade
•	Confiabilidade Estratégicas no campo e Empoderamento

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
          <a 
  href="https://www.linkedin.com" 
  target="_blank" 
  rel="noopener noreferrer" 
  className={styles.linkedinBtn}
>
  <Image 
    src="/imagens/linkedin.png" 
    alt="LinkedIn" 
    width={24}
    height={24}
    className={styles.linkedinIcon}
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