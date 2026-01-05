import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Quest.css';

const questData = {
  1: [
    { q: "Аналогия: Птица — Крыло. Автомобиль — ?", options: ["Дорога", "Колесо", "Водитель"], correct: 1 },
    { q: "Найдите синоним к слову 'Аутентичный'", options: ["Сложный", "Красивый", "Подлинный"], correct: 2 },
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
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      saveProgress(); 
    }
  };

  const saveProgress = async () => {
    const coinsToAdd = score * 5;
    const userId = localStorage.getItem('userId');

    if (!userId) return;

    try {
      const response = await fetch('http://localhost:5000/api/update-coins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, coinsToAdd })
      });

      const data = await response.json();

      if (response.ok) {
        // Обновляем локальные данные, чтобы профиль увидел их сразу
        const currentTotal = parseInt(localStorage.getItem('mentCoins') || '0');
        localStorage.setItem('mentCoins', (currentTotal + coinsToAdd).toString());
        localStorage.setItem('userRank', data.rank);
        toast.success(`Баллы сохранены!`);
      }
    } catch (error) {
      console.error("Ошибка сохранения:", error);
    }
  };

  if (showResult) {
    return (
      <div className="result-card">
        <h2>Квест завершен! 🎉</h2>
        <p>Результат: {score} из {questions.length}</p>
        <p>Заработано: <strong>{score * 5} MentCoins</strong></p>
        <button onClick={() => navigate('/subjects')} className="toHw">К предметам</button>
      </div>
    );
  }

  return (
    <div className="quest-container">
      <div className="question-box">
        <h3>{questions[currentQuestion]?.q}</h3>
        <div className="options">
          {questions[currentQuestion]?.options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)} className="option-btn">{opt}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quest;