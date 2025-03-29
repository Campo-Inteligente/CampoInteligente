import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        {/* Logo */}
        <div className={styles.footerlogo}>
          <img src="/imagens/logov.png" alt="Campo Inteligente" />
        </div>

        <div className={styles.footersocial}>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>

      <div className={styles.footerline}></div>

      <div className={styles.footercontainer}>
        {/* Links de navegação */}
        <div className={styles.footerlinks}>
          <a href="#">Home</a>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </div>

        {/* Jurídico */}
        <div className={styles.footerlegal}>
          <span className={styles.footertitle}>JURÍDICO</span>
          <a href="#">Termos de uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Política de Cookies</a>
        </div>

        {/* Contato */}
        <div className={styles.footercontact}>
          <p>Entre em contato conosco para saber mais</p>
          <a href="mailto:startupcampointeligente@gmail.com">
            startupcampointeligente@gmail.com
          </a>
        </div>
      </div>

      {/* Redes sociais */}

      {/* Copyright */}
      <div className={styles.footercopyright}>
        &copy; 2025 Campo Inteligente. Todos os direitos reservados.
      </div>
    </footer>
  );
}
