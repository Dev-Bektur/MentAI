import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Quest.css';

const questData = {
  1: [
    { q: "Аналогия: Птица — Крыло. Автомобиль — ?", options: ["Дорога", "Колесо", "Водитель"], correct: 1 },
    { q: "Найдите синоним к слову 'Аутентичный'", options: ["Сложный", "Красивый", "Подлинный"], correct: 2 },
    { q: "Антоним к слову 'Хаос'?", options: ["Порядок", "Шум", "Беспорядок"], correct: 0 },
    { q: "Продолжите ряд: 2, 4, 8, 16, ...", options: ["20", "32", "24"], correct: 1 },
    { q: "Какое слово лишнее?", options: ["Яблоко", "Груша", "Картофель"], correct: 2 },
  ]
};

function Quest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const questions = questData[id] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    let finalScore = score;
    
    // Проверяем ответ и увеличиваем временную переменную
    if (index === questions[currentQuestion].correct) {
      finalScore = score + 1;
      setScore(finalScore);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      // Передаем актуальный результат сразу в функцию сохранения
      saveProgress(finalScore); 
    }
  };

  const saveProgress = async (finalScore) => {
    const coinsToAdd = finalScore * 10; // 10 монет за каждый правильный ответ
    const userId = localStorage.getItem('userId');

    if (!userId || coinsToAdd === 0) return;

    // 1. СНАЧАЛА обновляем локально (чтобы пользователь сразу увидел результат)
    const currentTotal = parseInt(localStorage.getItem('mentCoins') || '0');
    const newTotal = currentTotal + coinsToAdd;
    localStorage.setItem('mentCoins', newTotal.toString());

    // 2. СРАЗУ уведомляем другие компоненты (User.jsx), чтобы они перерисовали баланс
    window.dispatchEvent(new Event('userChange'));
    toast.success(`Квест пройден! +${coinsToAdd} MentCoins`);

    // 3. ПОТОМ пробуем отправить данные на сервер для постоянного хранения
    try {
      const response = await fetch('https://mentai-server.onrender.com/api/update-coins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, coinsToAdd })
      });

      if (response.ok) {
        const data = await response.json();
        // Если сервер обновил ранг, сохраняем его тоже
        if (data.rank) {
          localStorage.setItem('userRank', data.rank);
          window.dispatchEvent(new Event('userChange'));
        }
      }
    } catch (error) {
      console.error("Сервер недоступен, баллы сохранены локально в браузере.");
    }
  };

  if (showResult) {
    return (
      <div className="result-card animate-fade">
        <h2>Квест завершен! 🎉</h2>
        <div className="result-info">
          <p>Ваш результат: <strong>{score} из {questions.length}</strong></p>
          <p>Вы заработали: <span className="coin-text">{score * 10} MentCoins</span></p>
        </div>
        <button onClick={() => navigate('/profile')} className="toHw">
          В личный кабинет
        </button>
      </div>
    );
  }

  return (
    <div className="quest-container">
      {/* Полоса прогресса */}
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="question-box">
        <span className="q-count">Вопрос {currentQuestion + 1} из {questions.length}</span>
        <h3>{questions[currentQuestion]?.q}</h3>
        <div className="options">
          {questions[currentQuestion]?.options.map((opt, i) => (
            <button 
              key={i} 
              onClick={() => handleAnswer(i)} 
              className="option-btn"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quest;