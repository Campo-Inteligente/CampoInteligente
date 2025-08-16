import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavbarVerde.module.css";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            src="/imagens/logov.png"
            alt="Campo Inteligente"
            width={200}
            height={50}
            priority
            style={{ cursor: "pointer" }}
          />
        </Link>
      </motion.div>

      {/* Container para desktop */}
      <div className={styles.navContainer}>
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

        <motion.a
          href={process.env.NEXT_PUBLIC_PANEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.desktopEnterButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
        >
          Entrar
        </motion.a>
      </div>

      {/* Container para mobile (cadeado + hamburguer) */}
      <div className={styles.mobileControls}>
        <a
          href={process.env.NEXT_PUBLIC_PANEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.lockButton}
        >
          <FontAwesomeIcon icon={faLock} />
        </a>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
        </div>
      </div>
    </motion.header>
  );
}