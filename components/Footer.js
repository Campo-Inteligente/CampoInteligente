import { motion } from "framer-motion";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    window.scrollTo(0, 0);
    window.location.href = href;
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={styles.footer}
    >
      <div className={styles.footercontainer}>
        {/* Logo animada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={styles.footerlogo}
        >
          <img src="/imagens/logov.png" alt="Campo Inteligente" />
        </motion.div>

        {/* Redes sociais animadas */}
        <motion.div className={styles.footersocial}>
          {[
            { icon: faInstagram, link: "#" },
            { icon: faLinkedin, link: "#" },
            { icon: faFacebook, link: "#" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2 * index,
                ease: "easeOut",
              }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className={styles.footerline}></div>

      <div className={styles.footercontainer}>
        {/* Links de navegação animados */}
        <motion.div className={styles.footerlinks}>
          {[
            { text: "Home", href: "/" },
            { text: "Sobre nós", href: "/sobre" },
            { text: "Contato", href: "/contato" },
          ].map((item, index) => (
            <Link href={item.href} key={index} passHref legacyBehavior>
              <motion.a
                onClick={handleClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
              >
                {item.text}
              </motion.a>
            </Link>
          ))}
        </motion.div>

        {/* Jurídico animado */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.footerlegal}
        >
          <span className={styles.footertitle}>JURÍDICO</span>
          <Link href="/termos" passHref legacyBehavior>
            <a onClick={handleClick}>Termos de uso</a>
          </Link>
          <Link href="/privacidade" passHref legacyBehavior>
            <a onClick={handleClick}>Política de Privacidade</a>
          </Link>
          <Link href="/cookies" passHref legacyBehavior>
            <a onClick={handleClick}>Política de Cookies</a>
          </Link>
        </motion.div>

        {/* Contato animado */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.footercontact}
        >
          <p>Entre em contato conosco para saber mais</p>
          <a href="mailto:startupcampointeligente@gmail.com">
            startupcampointeligente@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Copyright animado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={styles.footercopyright}
      >
        &copy; 2025 Campo Inteligente. Todos os direitos reservados.
      </motion.div>
    </motion.footer>
  );
}