import React, { useState, useEffect, useRef } from "react"; // Добавил useRef
import "./ChatConsulter.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function ChatConsulter() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // Добавил индикатор загрузки
  const { t } = useTranslation();
  
  // Реф для автопрокрутки (более надежный способ в React)
  const messagesEndRef = useRef(null);

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (!text.trim() || loading) return;

    const userMessage = { from: "user", text: text };
    setMessages((prev) => [...prev, userMessage]);
    setText("");
    setLoading(true);

    try {
      // ИНТЕГРАЦИЯ: Запрос к твоему серверу
      const response = await fetch("https://mentai-server.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          { from: "ai", text: data.reply } // data.reply придет от Gemini через бэкенд
        ]);
      } else {
        throw new Error("Ошибка ИИ");
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "Извини, я временно не могу ответить. Попробуй позже!" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Автопрокрутка
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className={`AIChatConsult ${open ? "open" : ""}`} onClick={!open ? toggleChat : null}>
      {!open && (
        <img
          src="https://static.vecteezy.com/system/resources/previews/052/699/608/non_2x/ai-generate-icon-artificial-intelligence-black-and-white-icon-modern-minimal-design-for-your-futuristic-website-or-application-image-generator-with-ai-vector.jpg"
          alt="ai"
        />
      )}

      {open && (
        <div className="chat-container" onClick={(e) => e.stopPropagation()}>
          <div className="chat-header">
            <h3>MentAI Consultant</h3>
            <button onClick={toggleChat}>×</button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <p className="empty-chat">Привет! Спроси меня что угодно об ОРТ или уроках.</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="msg ai typing">...</div>}
            <div ref={messagesEndRef} /> 
          </div>

          <form className="chat-input" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Напиши сообщение..."
              disabled={loading}
            />
            <button type="submit" disabled={loading}>➤</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatConsulter;