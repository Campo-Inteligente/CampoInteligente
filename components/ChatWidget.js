import { useState, useEffect, useRef } from "react";
import styles from "../styles/ChatWidget.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { LuSendHorizontal, LuX } from "react-icons/lu";
import Image from "next/image";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messageListRef = useRef(null);

  useEffect(() => {
    const savedSessionId = localStorage.getItem("iagro_session_id");
    if (savedSessionId) {
      setSessionId(savedSessionId);
    }
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          mensagem: currentInput,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.session_id) {
        setSessionId(data.session_id);
        localStorage.setItem("iagro_session_id", data.session_id);
      }

      const botMessage = { text: data.resposta, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {

        console.error("Falha ao comunicar com a API:", error);

        const mensagensErro = [
            "Me enrosquei nos cabo aqui... pensa num trem difícil!",
            "Fui lá na roça buscar umas ideia... mas me perdi no mato.",
            "A chuva caiu forte e embaralhou meu sistema que nem estrada de chão molhada.",
            "Tentei responder, mas parecia mói de burro empacado… não saía nada!",
            "Dei um bug aqui que nem galinha assustada com trovão.",
            "Meu sinal tá mais fraco que café de beira de estrada.",
            "Parece que alguém puxou o fio da minha cabeça... fiquei sem reação.",
            "Saí correndo atrás de uns dado e voltei de mão abanando.",
            "Meu sistema deu uma reviravolta que nem porco em dia de feira.",
            "Os botão aqui travou tudo… acho que foi poeira do campo!",
            "Tava indo bem, mas tropecei nos próprio código… ô lasqueira!",
            "Me atrapalhei todo, igual cavalo bravo no curral apertado.",
            "Fiquei rodando igual peão tonto sem rumo.",
            "Pensei que dava conta, mas travei igual trator atolado na lama.",
            "Caiu uma tempestade nos meus pensamento… eita confusão!",
        ];
      
        const usadas = JSON.parse(localStorage.getItem("mensagensUsadas") || "[]");
      
        // Se todas já foram usadas, reseta
        if (usadas.length === mensagensErro.length) {
          localStorage.removeItem("mensagensUsadas");
          usadas.length = 0;
        }
      
        // Filtra mensagens ainda não usadas
        const restantes = mensagensErro
          .map((msg, index) => ({ msg, index }))
          .filter(({ index }) => !usadas.includes(index));
      
        // Seleciona aleatoriamente uma das restantes
        const aleatoria = restantes[Math.floor(Math.random() * restantes.length)];
        usadas.push(aleatoria.index);
        localStorage.setItem("mensagensUsadas", JSON.stringify(usadas));
      
        const mensagemFinal = `Tenha paciência comigo, estou aprendendo a falar com humanos 😉🤖\n\n${aleatoria.msg}`;
      
        const errorMessage = {
          text: mensagemFinal,
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
        {/* Janela do Chat */}
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
                        width={30}
                        height={30}
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
                      width={30}
                      height={30}
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
      {/* Gatilho para abrir o chat */}
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
              Prazer! Sou o 🤖 IAGRO, seu assistente virtual 
              <br />especializado no agronegócio.
              <br />Vamos esclarecer suas 
              <br />dúvidas sobre o agro?
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
