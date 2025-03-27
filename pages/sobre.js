import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Sobre.module.css'

export default function Sobre() {
 
  const membros = [
    {
      nome: "Abimael Soares",
      descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipiscing quis voluptas possimus.",
      imagem: "/imagens/abimael.jpeg"
    },
    {
      nome: "Arthur Martins",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias ut?",
      imagem: "/imagens/arthur.jpg"
    },
    {
      nome: "Bruna Galiza",
      descricao: "Técnica em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia Baiano – Campus Santa Inês. Possui experiência prática em projetos voltados para tecnologia, comunicação e atendimento ao público.",
      imagem: "/imagens/bruna.jpg"
    },
    {
      nome: "Fabio Santos",
      descricao: "Técnico em Informática pelo IFBA, graduando em Sistemas de Informação pela UESB. Possui experiência em bancos de dados, desenvolvimento web, flutter e linguagens como Java e Python.",
      imagem: "/imagens/fabio.jpeg"
    },
    {
      nome: "Gisele Gomes",
      descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Evenet nobis enpildate minus ex scepe puratur suut delcerus.",
      imagem: "/imagens/gisele.jpg"
    },
    {
      nome: "João Victor",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligeudi, neque vertistat Dolores ipsam dicta velit suut consequatur.",
      imagem: "/imagens/joao.jpg"
    },
    {
      nome: "Juan Pablo",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nihil id voluptate cum necetur voluptatem repellat.",
      imagem: "/imagens/juan.jpg"
    },
    {
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
      
      <header className={styles.header}>
        <Link href="/">
          <Image 
                   src="/imagens/Logo.png" 
                   alt="Campo Inteligente" 
                   width={150} 
                   height={50}
                   priority
                 />
        </Link>
        
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link href="/sobre" className={`${styles.navLink} ${styles.activeNavLink}`}>Sobre nós</Link>
            </li>
            <li>
              <Link href="/contato" className={styles.navLink}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      
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
          
          <div className={styles.membros}>
            {membros.map((membro, index) => (
              <div key={index} className={styles.membro}>
                <Image
                  src={membro.imagem}
                  alt={membro.nome}
                  className={styles.membroImg}
                  width={120}
                  height={120}
                />
                <h3>{membro.nome}</h3>
                <p>{membro.descricao}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
