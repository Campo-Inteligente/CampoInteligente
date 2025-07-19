import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/painelControleStyles/SignUp.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    role: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não correspondem!");
      return;
    }
    if (!formData.termsAccepted) {
      alert("Você precisa aceitar os Termos de Serviço.");
      return;
    }

    try {
      const response = await fetch("/api/auth/signUp", {
        // Chamada para a sua API Route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          "Conta criada com sucesso! Você será redirecionado para o login."
        );
        router.push("/painelControle/business"); // Redireciona para a página de login
      } else {
        // Mostra a mensagem de erro vinda da API (ex: "E-mail já cadastrado")
        alert(`Erro: ${result.message}`);
      }
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      alert("Não foi possível conectar ao servidor. Tente novamente.");
    }
  };

  return (
    <>
      <Head>
        <title>Crie sua Conta | Campo Inteligente</title>
      </Head>

      <div className={styles.backgroundContainer}>
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/painelControle/business" className={styles.backButton}>
            <IoIosArrowBack size={24} />
          </Link>
          <h2 className={styles.title}>Crie sua Conta de Administrador</h2>
          <p className={styles.instructions}>
            Preencha os dados abaixo para se cadastrar.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className={styles.formGroup} controlId="fullName">
              <Form.Label>Nome completo:</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Digite seu nome completo"
                className={styles.input}
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className={styles.formGroup} controlId="email">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Linha responsiva para Organização e Cargo */}
            <Row>
              <Col md={6}>
                <Form.Group
                  className={styles.formGroup}
                  controlId="organization"
                >
                  <Form.Label>Sua Organização:</Form.Label>
                  <Form.Select
                    name="organization"
                    className={styles.input}
                    value={formData.organization}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione a organização</option>
                    <option value="org1">Organização A</option>
                    <option value="org2">Organização B</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className={styles.formGroup} controlId="role">
                  <Form.Label>Seu Cargo:</Form.Label>
                  <Form.Select
                    name="role"
                    className={styles.input}
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione seu cargo</option>
                    <option value="admin">Administrador</option>
                    <option value="gerente">Gerente</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className={styles.formGroup} controlId="password">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Mínimo 8 caracteres"
                    className={styles.input}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className={styles.formGroup}
                  controlId="confirmPassword"
                >
                  <Form.Label>Confirme a Senha:</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Repita a senha"
                    className={styles.input}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group
              className={styles.checkboxGroup}
              controlId="termsAccepted"
            >
              {/* --- ESTRUTURA CORRIGIDA AQUI --- */}
              <Form.Check
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
                className={styles.checkboxLabel} // A classe de estilo vai aqui
                label={
                  // O conteúdo do label, incluindo o link, vai na prop 'label'
                  <>
                    Eu li e aceito os{" "}
                    <Link href="/termos-de-servico" legacyBehavior>
                      <a target="_blank" className={styles.link}>
                        Termos de Serviço
                      </a>
                    </Link>
                  </>
                }
              />
            </Form.Group>

            <Button type="submit" className={styles.button}>
              Criar conta
            </Button>
          </Form>

          <div className={styles.footerLink}>
            Já possui uma conta?
            <Link href="/painelControle/business">Faça login</Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
