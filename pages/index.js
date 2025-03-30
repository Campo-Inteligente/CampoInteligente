import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setIsScrolled(window.scrollY > 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <Head>
        <title>Campo Inteligente</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.mainContent}>
      
        <section className={styles.hero}>
        <Navbar />
          <div className={styles.overlay}></div>
          
          <div className={styles.heroContent}>
            <div className={styles.logo2}>
              <Image 
                src="/imagens/1.png" 
                alt="Campo Inteligente" 
                width={400} 
                height={100} 
                layout="intrinsic"
              />
            </div>
          </div>

          <div className={styles.heroText}>
              <a href="#" className={styles.btn}>Conheça nosso ChatBot<span className={styles.arrow}>⟶</span></a>
              <p className={styles.description}>
              Somos uma plataforma inovadora que coloca a tecnologia a serviço do agricultor familiar. Com inteligência artificial integrada a dados meteorológicos e de mercado, oferecemos uma ferramenta simples, eficiente e acessível para otimizar o plantio, o manejo das lavouras e a colheita. Tudo isso na palma da sua mão, direto pelo WhatsApp, para que você tome decisões estratégicas e maximize seus lucros com segurança e praticidade!
              </p>
            </div>

          <div className={styles.socialIcons}>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
          
        </section>
        
      </main>

      <Footer />
    
    </>
  );
}
