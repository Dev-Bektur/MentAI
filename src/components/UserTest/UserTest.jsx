import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserTest.css";

function UserTest() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 8) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const finishTest = () => {
    // проверка, все ли поля заполнены
    const empty = Object.values(answers).some((val) => val === "");
    if (empty) {
      toast.error("Пожалуйста, ответьте на все вопросы!");
      return;
    }
    toast.success("✅ Тест успешно сдан! Спасибо за уделённое время!");
    localStorage.setItem("testPassed", "true");
  };

  return (
    <div className="user-test">
      <h2>BilimHub: Адаптивный тест ({step}/8)</h2>

      {step === 1 && (
        <div className="block">
          <h3>Знакомство с пользователем</h3>
          <label>Как тебя зовут?</label>
          <input name="name" onChange={handleChange} />
          <label>Сколько тебе лет?</label>
          <input name="age" onChange={handleChange} />
          <label>Когда заканчиваешь школу?</label>
          <input name="schoolEnd" onChange={handleChange} />
          <label>Откуда узнал о нас?</label>
          <input name="source" onChange={handleChange} />
        </div>
      )}

      {step === 2 && (
        <div className="block">
          <h3>Психологический и обучающий тест для адаптивной подготовки</h3>
          <p>1. Когда тебе нужно запомнить правило?</p>
          <select name="v1" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Переписываю и читаю глазами</option>
            <option>б) Проговариваю вслух</option>
            <option>в) Рисую схему или картинку</option>
            <option>г) Решаю примеры</option>
          </select>
          <p>2. Если тема непонятна?</p>
          <select name="v2" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Смотрю видеоурок</option>
            <option>б) Прошу объяснить</option>
            <option>в) Читаю в книге</option>
            <option>г) Решаю похожие задания</option>
          </select>
        

          <p>3. Что тебе интереснее?</p>
          <select name="v5" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Смотреть анимации, картинки, графики</option>
            <option>б) ПСлушать лекцию или подкаст</option>
            <option>в) Читать тексты или статьи</option>
            <option>г) Делать руками(практика)</option>
          </select>
          
          </div>
      )}

      {step === 3 && (
        <div className="block">
          <p>4. Для чего тебе нужен выскоий балл в ОРТ?</p>
          <select name="v5" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Поступление в ВУЗ</option>
            <option>б) Получить грант/финансирование</option>
            <option>в) Доказать себе и родителям</option>
            <option>г) Попробовать для себя</option>
          </select>
          <p>5. Как ты относишься к конкуренции?</p>
          <select name="v6" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Мотивирует</option>
            <option>б) Нейтрально</option>
            <option>в) Нравится работать в окманде</option>
            <option>г) Иногда мешает</option>
          </select>
        </div>
      )}

      {step === 4 && (
        <div className="block">
          <p>6. Как готовишься к экзаменам?</p>
          <select name="v8" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Составляю план</option>
            <option>б) По настроению</option>
            <option>в) Откладываю</option>
            <option>г) Начинаю с лёгкого</option>
          </select>

          <p>7. Сколько времени в день готов уделять подготовке?</p>
          <select name="v8" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) 2 часа</option>
            <option>б) 3-4 часа</option>
            <option>в) 30 минут - 1 час</option>
            <option>г) 30 минут и меньше</option>
          </select>

          <p>8. Когда удобно учиться?</p>
          <select name="v8" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Утром</option>
            <option>б) Днём</option>
            <option>в) Вечером</option>
            <option>г) Ночью</option>
          </select>
        </div>
      )}

      {step === 5 && (
        <div className="block">
          <p>9. Если задание трудное?</p>
          <select name="v11" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Ищу разные пути</option>
            <option>б) Спрашиваю у других</option>
            <option>в) Откладываю на потом</option>
            <option>г) Нервничаю</option>
          </select>
        </div>
      )}

      {step === 6 && (
        <div className="block">
          <p>10. Ты чаще...</p>
          <select name="v13" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Экстраверт</option>
            <option>Интроверт</option>
          </select>
          <p>11. Ты больше...</p>
          <select name="v14" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Сначала действуешь</option>
            <option>Сначала планируешь</option>
          </select>

          <p>12. Важнее:</p>
          <select name="v14" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Практическая польза знаний</option>
            <option>б) Красота идей и теорий</option>
          </select>

          <p>13. Ты доверяешь больше ...</p>
          <select name="v14" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>Фактам и цифрам</option>
            <option>Интуиции и догадкам</option>
          </select>
        </div>
      )}

      {step === 7 && (
        <div className="block">
          <p>14. 15 × 12 = ?</p>
          <input name="v17" onChange={handleChange} />
          <p>15. Найди ошибку: «У меня есть яблоки три».</p>
          <input name="v18" onChange={handleChange} />
          <p>16. Переведи: “I am studying”.</p>
          <input name="v19" onChange={handleChange} />
        </div>
      )}

      {step === 8 && (
        <div className="block">
          <p>17. Сколько гаджетов для учебы у тебя есть?</p>
          <select name="v13" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Только телефон</option>
            <option>б) Телефон и ноутбук</option>
            <option>в) Есть планшет</option>
            <option>г) Доступ только в школе</option>
          </select>
          <p>18. Где тебе удобнее готовиться?</p>
          <select name="v14" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Дома</option>
            <option>б) В библиотеке</option>
            <option>в) С друзьями</option>
            <option>г) В школе</option>
          </select>

          <p>19. Твое отношение к видеоурокам?</p>
          <select name="v14" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Очень помогают</option>
            <option>б) Иногда полезны</option>
            <option>в) Редко смотрю</option>
            <option>г) Не люблю</option>
          </select>

          <p>20. Что тебя мотивирует?</p>
          <select name="v14" onChange={handleChange}>
            <option value="">Выбери...</option>
            <option>а) Баллы и рейтинг</option>
            <option>б) Награды</option>
            <option>в) Поддержка</option>
            <option>г) Чувство прогресса</option>
          </select>
        </div>
      )}

      <div className="btns">
        {step > 1 && <button onClick={prevStep}>Назад</button>}
        {step < 8 && <button onClick={nextStep}>Далее</button>}
        {step === 8 && <button onClick={finishTest}>Отправить</button>}
      </div>
    </div>
  );
}

export default UserTest;