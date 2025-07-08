import { useState, useEffect, useRef } from "react";
import styles from "../styles/ChatInterface.module.css";
import { LuSendHorizontal } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      text: "Olá! Sou a Iagro, sua assistente virtual da Campo Inteligente. Como posso te ajudar hoje?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const messageListRef = useRef(null);

  // Efeito para rolar o container de mensagens para o final
  useEffect(() => {
    const messageListElement = messageListRef.current;
    if (messageListElement) {
      messageListElement.scrollTop = messageListElement.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "" || isLoading) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // URL apontando para a sua API de backend no servidor
      const response = await fetch(
        "http://campointeligente.ddns.com.br:21083/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mensagem: input }),
        }
      );

      if (!response.ok) {
        throw new Error("Falha na resposta da API");
      }

      const data = await response.json();
      const botMessage = {
        text: data.resposta || "Desculpe, não entendi.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao chamar a API do chatbot:", error);
      const errorMessage = {
        text: "Desculpe, estou com problemas para me conectar. Tente novamente mais tarde.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messageList}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${styles[msg.sender]}`}
          >
            {/* Renderiza o avatar do bot ou do usuário */}
            {msg.sender === "bot" ? (
              <Image
                src="/imagens/avatar.png"
                alt="Avatar do Bot"
                width={40}
                height={40}
                className={styles.avatar}
              />
            ) : (
              <FaUserCircle className={styles.avatar} color="#ccc" size={40} />
            )}

            {/* Balão de texto */}
            <p>{msg.text}</p>
          </div>
        ))}
        {/* Animação de "digitando..." */}
        {isLoading && (
          <div className={`${styles.message} ${styles.bot}`}>
            <Image
              src="/imagens/avatar.png"
              alt="Avatar do Bot"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <div className={styles.loadingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Digite sua mensagem..."
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading}>
          <LuSendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}
