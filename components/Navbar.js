import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setIsScrolled(window.scrollY > 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={styles.logo}
      >
        <Link href="/">
         <Image
          src="/imagens/Logo.png"
          alt="Campo Inteligente" 
          width={200}
           height={50} 
           priority 
           style={{cursor: 'pointer'}}
             />
        
        </Link>
       
      </motion.div>

      {/* Botão menu hamburguer */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
      </div>

      {/* Menu normal + mobile */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre nós</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
}
