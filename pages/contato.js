import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/NavbarVerde';
import Footer from '../components/Footer';
import styles from '../styles/Contato.module.css';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          mensagem: "",
        });
      } else {
        alert("Erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar. Verifique sua conexão.");
    }
  };

   return (
    <>
      <Head>
        <title>Contato | Campo Inteligente</title>
      </Head>

      <div className={styles.wrapper}>
        <main className={styles.container}>
          <motion.h2
            className={styles.titulo}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Conecte-se com a Campo Inteligente
          </motion.h2>

          <motion.p
            className={styles.subtitulo}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            Cultive oportunidades e transforme sua produção com inovação.
          </motion.p>

          <section className={styles.contato}>
            <Navbar />
            
            <motion.div
              className={styles.formulario}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <form onSubmit={handleSubmit}>
                <div className={styles.campo}>
                  <label>Nome completo: *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.campo}>
                  <label>Telefone:</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.campo}>
                  <label>E-mail: *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.campo}>
                  <label>Mensagem: *</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={styles.botao}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Enviar
                </motion.button>
              </form>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}