import { useState, useEffect, useRef } from "react";
import styles from "../styles/ChatWidget.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { LuSendHorizontal, LuX } from "react-icons/lu";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messageListRef = useRef(null);

  useEffect(() => {
    let currentSessionId = localStorage.getItem("iagro_session_id");
    if (!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem("iagro_session_id", currentSessionId);
    }
    setSessionId(currentSessionId);
  }, []);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh); 

    // Função de limpeza para remover o listener
    return () => window.removeEventListener("resize", setVh);
  }, []);


  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "" || isLoading) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          message: currentInput,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage = { text: data.response, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Falha ao comunicar com a API:", error);
      const errorMessage = {
        text: "Desculpe, não consegui me conectar. Tente novamente.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.widgetContainer}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={styles.chatWindow}
            >
              <div className={styles.chatHeader}>
                <h3>Como o Iagro pode te ajudar?</h3>
                <button
                  className={styles.closeButton}
                  onClick={() => setIsOpen(false)}
                >
                  <LuX size={20} />
                </button>
              </div>
              <div ref={messageListRef} className={styles.messageList}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`${styles.message} ${styles[msg.sender]}`}
                  >
                    {msg.sender === "bot" && (
                      <Image
                        src="/imagens/perfil.png"
                        alt="Avatar"
                        width={20}
                        height={20}
                        className={styles.avatar}
                      />
                    )}
                    <p>{msg.text}</p>
                  </div>
                ))}
                {isLoading && (
                  <div className={`${styles.message} ${styles.bot}`}>
                    <Image
                      src="/imagens/perfil.png"
                      alt="Avatar"
                      width={20}
                      height={20}
                      className={styles.avatar}
                    />
                    <div className={styles.loadingDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
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
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className={styles.sendButton}
                >
                  <LuSendHorizontal size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.8 }}
            className={styles.chatTrigger}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.textBubble}>
              🖐️Olá! Sou o IAGRO,<br /> seu Assistente Virtual.
              <br />
              Estou aqui para ajudar, <br /> conte comigo!
            </span>
            <Image
              src="/imagens/avatar.png"
              alt="Abrir Chat"
              width={200}
              height={200}
              className={styles.triggerAvatar}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
