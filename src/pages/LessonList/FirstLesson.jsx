import React, { useState } from 'react'
import './LessonList.css'
import { Link } from 'react-router-dom'

function FirstLesson() {
  // новое состояние — открыта ли форма вопроса
  const [questionOpen, setQuestionOpen] = useState(false)
  const [questionText, setQuestionText] = useState("")

  const handleSend = () => {
    if (!questionText.trim()) {
      alert("Пожалуйста, напишите ваш вопрос.")
      return
    }

    // Здесь можно отправить вопрос в backend
    alert("Ваш вопрос отправлен!")

    setQuestionText("")
    setQuestionOpen(false)
  }

  return (
    <div className='lessonListPage'>
      <h1>Урок №1</h1>
      <p>Тема: Натуральные числа</p>

      <iframe 
        className='video' 
        width="620" 
        height="345" 
        src="https://www.youtube.com/embed/REuqPnRMrb4?si=umjqaoK4uGRuA1Ou" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>

      <textarea name="Заметки" className='zametki'></textarea>

      <div className='lessonBtns'>
        <Link to="/contact"><button>Я не понял тему</button></Link>
        <button>Закрепить тему</button>  
      </div>

      {/* Кнопка открытия блока вопросов */}
      <button 
        className='doYouHaveQues'
        onClick={() => setQuestionOpen(!questionOpen)}
      >
        У вас есть вопросы?
      </button>

      {/* Блок вопросов */}
      {questionOpen && (
        <div className="questionBlock">
          <textarea
            className="questionTextarea"
            placeholder="Напишите ваш вопрос здесь..."
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          ></textarea>

          <button className="sendQuestionBtn" onClick={handleSend}>
            Отправить
          </button>
        </div>
      )}
    </div>
  )
}

export default FirstLesson
