import { useState, useEffect, useRef } from "react";
import styles from "../styles/ChatWidget.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { LuSendHorizontal, LuX } from "react-icons/lu";
import Image from "next/image";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Olá! Sou a Iagro, sua assistente virtual. Como posso ajudar?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [convoStep, setConvoStep] = useState(0);
  const messageListRef = useRef(null);

  // Efeito de scroll interno
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // Função de mock...
  const getMockResponse = (step, userInput) => {
    switch (step) {
      case 0:
        setConvoStep(1);
        return "Para começarmos, qual é o seu nome completo?";
      case 1:
        setConvoStep(2);
        return `Prazer, ${userInput}! E qual o seu endereço?`;
      case 2:
        setConvoStep(0);
        return `Entendi! Endereço registrado. Como posso te ajudar agora?`;
      default:
        setConvoStep(0);
        return "Desculpe, não entendi.";
    }
  };

  const handleSend = async () => {
    if (input.trim() === "" || isLoading) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const botResponseText = getMockResponse(convoStep, currentInput);
      const botMessage = { text: botResponseText, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.widgetContainer}>
        {/* Janela do Chat (Animação com Framer Motion) */}
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
                <h3>Converse com a Iagro</h3>
                <p>Sua assistente agrícola inteligente</p>
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
                        width={40}
                        height={40}
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
      {/* Gatilho para abrir o chat (só aparece quando o chat está fechado) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 10, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={styles.chatTrigger}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.textBubble}>Converse com o Iagro</span>
            <Image
              src="/imagens/avatar.png"
              alt="Abrir Chat"
              width={100}
              height={100}
              className={styles.triggerAvatar}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
