import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/NavbarVerde";
import Footer from "../components/Footer";
import styles from "../styles/Contato.module.css";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <>
      <Head>
        <title>Contato | Campo Inteligente</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.container}>
        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Conecte-se com a Campo Inteligente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Cultive oportunidades e transforme sua produção com inovação.
        </motion.p>

        <section className={styles.contato}>
          <Navbar />

          {/* Formulário animado */}
          <motion.div
            className={styles.formulario}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit}>
              <label>Nome completo: *</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />

              <label>Telefone:</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />

              <label>E-mail: *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Mensagem: *</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>

              {/* Botão animado */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Enviar
              </motion.button>
            </form>
          </motion.div>

          {/* Imagem animada */}
          <motion.div
            className={styles.imagem}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/imagens/contato1.png"
              alt="Agricultor usando o app"
              width={500}
              height={500}
            />
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}