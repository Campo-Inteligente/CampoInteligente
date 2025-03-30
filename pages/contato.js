import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contato.module.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <>
      <Head>
        <title>Contato - Campo Inteligente</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet" />
      </Head>

      

      <main className={styles.container}>
      <h2>Conecte-se com a Campo Inteligente</h2>
      <p>Cultive oportunidades e transforme sua produção com inovação.</p>
        <section className={styles.contato}>
        <Navbar />
          <div className={styles.formulario}>
            
            <form onSubmit={handleSubmit}>
              <label>Nome completo: *</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

              <label>Telefone:</label>
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />

              <label>E-mail: *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>Mensagem: *</label>
              <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} required></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className={styles.imagem}>
            <Image src="/imagens/contato1.png" alt="Agricultor usando o app" width={500} height={500} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
