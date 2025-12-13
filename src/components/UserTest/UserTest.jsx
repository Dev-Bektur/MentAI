import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserTest.css";
import { useNavigate } from "react-router-dom";

function UserTest() {
  const navigate = useNavigate();

  // Проверка ДО рендера — если тест пройден, не показываем компонент
  const testPassed = localStorage.getItem("bilimhub_test_passed") === "true";

  useEffect(() => {
    if (testPassed) {
      navigate("/", { replace: true });
    }
  }, [testPassed, navigate]);

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    q1: "", q2: "", q3: "", q4: "", q5: "",
    q6: "", q7: "", q8: "", q9: "", q10: "",
    q11: "", q12: "", q13: "", q14: "", q15: "",
    q16: "", q17: "", q18: "", q19: "", q20: ""
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // отправка в Бэкенд API
  const sendToAPI = async () => {
    try {
      await fetch("https://bilimhub.kg/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers)
      });
    } catch (err) {
      console.error("Ошибка API", err);
    }
  };

  async function saveAllAnswersToAPI() {
    const userId = Date.now(); // временно (позже можно заменить на реальный ID)

    try {
      for (let key in answers) {
        await fetch("http://localhost:4000/api/answers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            questionId: key,
            answer: answers[key]
          })
        });
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }
  }

  const finishTest = async () => {
    const empty = Object.values(answers).some((v) => v.trim() === "");

    if (empty) {
      toast.error("Пожалуйста, ответь на ВСЕ вопросы!");
      return;
    }

    toast.success("Готово!");

    localStorage.setItem("bilimhub_test_passed", "true");

    await saveAllAnswersToAPI();

    setTimeout(() => navigate("/", { replace: true }), 1200);
  };

  if (testPassed) return null;

  return (
    <div className="user-test">
      <h2>BilimHub: Адаптивный тест ({step}/8)</h2>

      {/* === STEP 1 === */}
      {step === 1 && (
        <div className="block">
          <h3>Знакомство</h3>

          <label>Как тебя зовут?</label>
          <input name="q1" onChange={handleChange} />

          <label>Сколько тебе лет?</label>
          <input name="q2" onChange={handleChange} />

          <label>Когда заканчиваешь школу?</label>
          <input name="q3" onChange={handleChange} />

          <label>Откуда узнал о нас?</label>
          <input name="q4" onChange={handleChange} />
        </div>
      )}

      {/* === STEP 2 === */}
      {step === 2 && (
        <div className="block">
          <p>1. Когда тебе нужно запомнить правило?</p>
          <select name="q5" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Переписываю</option>
            <option>Проговариваю</option>
            <option>Рисую схему</option>
            <option>Делаю примеры</option>
          </select>

          <p>2. Если тема непонятна?</p>
          <select name="q6" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Видео</option>
            <option>Объяснение</option>
            <option>Книга</option>
            <option>Практика</option>
          </select>

          <p>3. Что интереснее?</p>
          <select name="q7" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Анимации</option>
            <option>Подкасты</option>
            <option>Тексты</option>
            <option>Практика</option>
          </select>
        </div>
      )}

      {/* === STEP 3 === */}
      {step === 3 && (
        <div className="block">
          <p>4. Для чего нужен высокий балл?</p>
          <select name="q8" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Поступить</option>
            <option>Грант</option>
            <option>Доказать</option>
            <option>Для себя</option>
          </select>

          <p>5. Как относишься к конкуренции?</p>
          <select name="q9" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Мотивирует</option>
            <option>Нейтрально</option>
            <option>Команда</option>
            <option>Мешает</option>
          </select>
        </div>
      )}

      {/* === STEP 4 === */}
      {step === 4 && (
        <div className="block">
          <p>6. Как готовишься?</p>
          <select name="q10" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>План</option>
            <option>Настроение</option>
            <option>Откладываю</option>
            <option>С лёгкого</option>
          </select>

          <p>7. Сколько времени в день?</p>
          <select name="q11" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>2 часа</option>
            <option>3-4 часа</option>
            <option>30 мин - 1 час</option>
            <option>30 мин и меньше</option>
          </select>

          <p>8. Когда удобно учиться?</p>
          <select name="q12" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Утром</option>
            <option>Днём</option>
            <option>Вечером</option>
            <option>Ночью</option>
          </select>
        </div>
      )}

      {/* === STEP 5 === */}
      {step === 5 && (
        <div className="block">
          <p>9. Если задание трудное?</p>
          <select name="q13" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Ищу способы</option>
            <option>Спрашиваю</option>
            <option>Откладываю</option>
            <option>Нервничаю</option>
          </select>
        </div>
      )}

      {/* === STEP 6 === */}
      {step === 6 && (
        <div className="block">
          <p>10. Ты чаще...</p>
          <select name="q14" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Экстраверт</option>
            <option>Интроверт</option>
          </select>

          <p>11. Ты больше...</p>
          <select name="q15" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Действуешь</option>
            <option>Планируешь</option>
          </select>

          <p>12. Важнее:</p>
          <select name="q16" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Практическая польза</option>
            <option>Красота идей</option>
          </select>

          <p>13. Ты доверяешь больше...</p>
          <select name="q17" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Фактам</option>
            <option>Интуиции</option>
          </select>
        </div>
      )}

      {/* === STEP 7 === */}
      {step === 7 && (
        <div className="block">
          <p>14. 15 × 12 = ?</p>
          <input name="q18" onChange={handleChange} />

          <p>15. Найди ошибку: «У меня есть яблоки три».</p>
          <input name="q19" onChange={handleChange} />

          <p>16. Переведи: “I am studying”.</p>
          <input name="q20" onChange={handleChange} />
        </div>
      )}

      {/* === STEP 8 === */}
      {step === 8 && (
        <div className="block">
          <p>17. Сколько гаджетов?</p>
        </div>
      )}

      <div className="btns">
        {step > 1 && <button onClick={prevStep}>Назад</button>}
        {step < 7 && <button onClick={nextStep}>Далее</button>}
        {step === 7 && <button onClick={finishTest}>Отправить</button>}
      </div>
    </div>
  );
}

export default UserTest;
