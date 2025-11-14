import React from 'react'
import './LessonRegulation.scss'
import { Link, useNavigate } from 'react-router-dom'

function LessonRegulation() {
  const navigate = useNavigate()

  const lessons = [
    {
      day: "Понедельник",
      topic: "Математика: Логарифмы",
      date: "10.11.2025",
      time: "15:00",
      teacher: "",
      place: "Google Meet",
    },
    {
      day: "Вторник",
      topic: "Аналогия: Типы связей",
      date: "11.11.2025",
      time: "18:00",
      teacher: "",
      place: "Google Meet",
    },
    {
      day: "Среда",
      topic: "Чтение: Понимание текста",
      date: "12.11.2025",
      time: "17:00",
      teacher: "",
      place: "Google Meet",
    },
    {
      day: "Четверг",
      topic: "Грамматика: Сложные предложения",
      date: "13.11.2025",
      time: "16:00",
      teacher: "",
      place: "Google Meet",
    },
    {
      day: "Пятница",
      topic: "OPT подготовка: Мини-тест",
      date: "14.11.2025",
      time: "14:30",
      teacher: "",
      place: "Google Meet",
    }
  ]

  return (
    <div className="lessonRegulation-wrapper">

      <div className='lessonRegulation'>
        {lessons.map((item, index) => (
          <div
            key={index}
            className="lessonCard"
            onClick={() => navigate('/lesson')}
          >
            <h3>{item.day}</h3>
            <p><strong>Тема:</strong> {item.topic}</p>
            <p><strong>Дата:</strong> {item.date}</p>
            <p><strong>Время:</strong> {item.time}</p>
            <p><strong>Преподаватель:</strong> {item.teacher}</p>
            <p><strong>Место:</strong> {item.place}</p>
          </div>
        ))}
      </div>

      {/* КНОПКИ */}
      <div className="lesson-buttons">
        <Link to="/lesson" className="btn blue">Начать урок</Link>
        <Link to="/lesson" className="btn light">Сделать задание</Link>
        <Link to="/test" className="btn darkblue">Начать тест</Link>
      </div>

    </div>
  )
}

export default LessonRegulation
