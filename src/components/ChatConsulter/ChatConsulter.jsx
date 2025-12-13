import React, { useState, useEffect } from "react";
import "./ChatConsulter.css";
import { useTranslation } from "react-i18next";

function ChatConsulter() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const {t} = useTranslation();

  const toggleChat = () => {
    setOpen(!open);
  };

  const sendMessage = () => {
    if (!text.trim()) return;

    setMessages([...messages, { from: "user", text }]);

    // Заглушка для ответа ИИ
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "ИИ отвечает: " + text }
      ]);
    }, 600);

    setText("");
  };

  useEffect(() => {
  const box = document.querySelector(".chat-messages");
  if (box) box.scrollTop = box.scrollHeight;
}, [messages]);


  return (
    <div className={`AIChatConsult ${open ? "open" : ""}`} onClick={!open ? toggleChat : null}>
      
      {/* Картинка — видно только когда свернуто */}
      {!open && (
        <img
          src="https://static.vecteezy.com/system/resources/previews/052/699/608/non_2x/ai-generate-icon-artificial-intelligence-black-and-white-icon-modern-minimal-design-for-your-futuristic-website-or-application-image-generator-with-ai-vector.jpg"
          alt="ai"
        />
      )}

      {/* ЧАТ */}
      {open && (
        <div className="chat-container" onClick={(e) => e.stopPropagation()}>
          <div className="chat-header">
            <h3>AI Consultant</h3>
            <button onClick={toggleChat}>×</button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Напиши сообщение..."
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatConsulter;
