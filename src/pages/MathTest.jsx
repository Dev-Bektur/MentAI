import React, { useState, useEffect } from "react";
import './Math.css';
import { Link } from "react-router-dom";


const pages = [
  { start: 0, end: 6, img: "https://ort.futurika.asia/storage/2025/03/21/77dde7eaf058299fd476d025ff9004e1170ae7a1.jpg" },
  { start: 6, end: 15, img: "https://ort.futurika.asia/storage/2025/03/21/162465555f311fe1e807b42ed06d3fa68b6b3b26.jpg" },
  { start: 17, end: 24, img: "https://ort.futurika.asia/storage/2025/03/21/e8fe67f5ea668e6cb0ea7a2271946473a5394d6a.jpg" },
  { start: 24, end: 30, img: "https://ort.futurika.asia/storage/2025/03/21/92e5f9ab7e69aa798027be26a8f8360009adc623.jpg" }
];

const questions = [
  {
    id: 1,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 2,
   options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 3,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 4,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 5,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 6,
    options: ["А", "Б", "В", "Г"],
    answer: "В"
  },
  {
    id: 7,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 8,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 9,
   options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 10,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 11,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 12,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 13,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 14,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 15,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 16,
   options: ["А", "Б", "В", "Г"],
    answer: "В"
  },
  {
    id: 17,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 18,
    options: ["А", "Б", "В", "Г"],
    answer: "Г"
  },
  {
    id: 19,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 20,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 21,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 22,
   options: ["А", "Б", "В", "Г"],
    answer: "В"
  },
  {
    id: 23,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 24,
    options: ["А", "Б", "В", "Г"],
    answer: "В"
  },
  {
    id: 25,
    options: ["А", "Б", "В", "Г"],
    answer: "В"
  },
  {
    id: 26,
    options: ["А", "Б", "В", "Г"],
    answer: "А"
  },
  {
    id: 27,
    options: ["А", "Б", "В", "Г"],
    answer: "В"
  },
  {
    id: 28,
    options: ["А", "Б", "В", "Г"],
    answer: "В"
  },
  {
    id: 29,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
  {
    id: 30,
    options: ["А", "Б", "В", "Г"],
    answer: "Б"
  },
];

function MathTest() {
  const [started, setStarted] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 минут в секундах

  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) {
      finishTest();
      return;
    }
    const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [started, timeLeft, finished]);

  const handleAnswer = (qIndex, option) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (pageIndex < pages.length - 1) setPageIndex(pageIndex + 1);
    else finishTest();
  };

  const handleBack = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  const finishTest = () => {
  let s = 0;
  answers.forEach((ans, i) => {
    if (ans === questions[i].answer) s++;
  });

  setScore(s);
  setFinished(true);

  // Старое сохранение (если ты его используешь)
  localStorage.setItem("math_score", s);

  // ✔ Новое сохранение истории, которое нужно для списка тестов
  const history = JSON.parse(localStorage.getItem("testHistory")) || {};

  history["math"] = {
    date: new Date().toLocaleDateString(),
    correct: s,
    total: questions.length
  };

  localStorage.setItem("testHistory", JSON.stringify(history));
};


  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
  };

  if (!started) {
    return (
      <div className="testStart">
        <h2>Внимание!</h2>
        <p className="p1">У тебя есть 30 минут на прохождение теста.</p>
        <p className="p2">Не открывай другие вкладки, не обновляй страницу, иначе тест может быть сброшен.</p>
        <p className="p3">Все вопросы неотвеченные к концу времени считаются ошибкой.</p>
        <button onClick={() => setStarted(true)}>Начать тест</button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="testEnd">
        <h2>Тест завершён ✅</h2>
        <p className="p1">Ты набрал {score} из {questions.length} баллов</p>
        <p className="p2">Время, оставшееся при завершении: {formatTime(timeLeft)}</p>
        <h3>Чтобы достичь еще лучших результатов, пройдите наш курс в разделе  <Link to="/lesson">"Уроки"</Link>  :)</h3>
      </div>
    );
  }

  const currentPage = pages[pageIndex];

  return (
    <div className="testWindow">
      <div className="timer">Осталось времени: {formatTime(timeLeft)}</div>
      <h3>Вопросы {currentPage.start + 1} - {currentPage.end}</h3>
      <img src={currentPage.img} alt="Вопросы" className="question-img" />

      <div className="answers">
  {questions.slice(currentPage.start, currentPage.end).map((q, idx) => {
    const qIndex = currentPage.start + idx; // реальный индекс вопроса
    return (
      <div key={q.id} className="question-block">
        <p>Вопрос {q.id}</p>
        {q.options.map((option, i) => (
          <button
            key={i}
            className={answers[qIndex] === option ? "selected" : ""}
            onClick={() => handleAnswer(qIndex, option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  })}
</div>

      <div className="navigationMath">
        <button onClick={handleBack} disabled={pageIndex === 0}>Назад</button>
        <button onClick={handleNext}>
          {pageIndex === pages.length - 1 ? "Завершить" : "Вперед"}
        </button>
      </div>
    </div>
  );
}


export default MathTest;


