import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [version, setVersion] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    window.scrollTo(0, 0);
    window.location.href = href;
  };

  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => setVersion(data))
      .catch((err) => console.error("Erro ao carregar versão:", err));
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={styles.footer}
    >
      <div className={styles.footercontainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={styles.footerlogo}
        >
          <Image
            width={100}
            height={80}
            style={{ objectFit: "contain" }}
            src="/imagens/logov.png"
            alt="Campo Inteligente"
          />
        </motion.div>

        <motion.div className={styles.footersocial}>
          {[
            {
              icon: faInstagram,
              link: "https://www.instagram.com/startupcampointeligente/",
            },
            {
              icon: faLinkedin,
              link: "https://www.linkedin.com/company/campointeligente/",
            },
            {
              icon: faFacebook,
              link: "https://www.facebook.com/share/1P3EQSsmCx/",
            },
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

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.footerlegal}
        >
          <div 
            className={styles.legalHeader}
            onClick={() => setIsLegalOpen(!isLegalOpen)}
          >
            <span className={styles.footertitle}>JURÍDICO</span>
            <motion.div
              animate={{ rotate: isLegalOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faChevronDown} className={styles.chevronIcon} />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isLegalOpen ? 'auto' : 0,
              opacity: isLegalOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className={styles.legalLinks}
          >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={styles.footercopyright}
      >
        {version && (
          <div className={styles.footerleft}>
            <p>
              Versão: {version.version} ({version.commit})<br />
              <small>Build: {new Date(version.date).toLocaleString()}</small>
            </p>
          </div>
        )}
        <div className={styles.footercenter}>
          &copy; 2025 Campo Inteligente. Todos os direitos reservados.
        </div>
      </motion.div>
    </motion.footer>
  );
}