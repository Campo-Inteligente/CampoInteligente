import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';

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

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src="/imagens/Logo.png" 
            alt="Campo Inteligente" 
            width={200} 
            height={50}
            priority
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/sobre">Sobre nós</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.hero}>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quasi, animi voluptatibus pariatur voluptas expedita nemo qui libero quo odio autem saepe, debitis error aperiam cumque facilis dignissimos incidunt vero.
              </p>
            </div>

          <div className={styles.socialIcons}>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </section>
        <Footer />
      </main>
    
    </>
  );
}
