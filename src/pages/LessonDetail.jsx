import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './LessonDetail.css'

function LessonDetail() {
  // useParams вытащит номер урока из ссылки (URL)
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNotUnderstood = () => {
    alert("Свяжись с учителем MentAi в Telegram: @teacher_handle \nИли WhatsApp: +996xxxxxxxxx");
  };

  return (
    <div className='videoLesson'>
      <button onClick={() => navigate(-1)} className='backBtn'>← Назад</button>
      
      <h1>Урок №{id}</h1>
      
      {/* Плеер для видео (пока заглушка) */}
      <div className='videoScreen'>
        <p>Здесь будет видеозапись урока №{id}</p>
      </div>

      <div className='lessonBtns'>
        <button className='didntUnderstood'  onClick={handleNotUnderstood}>
          Не понял тему
        </button>
        
        <Link to="/totheH"><button className='toHw' onClick={() => alert(`Переход к ДЗ урока №${id}`)}>
          Перейти к ДЗ
        </button></Link>
      </div>
    </div>
  );
}

export default LessonDetail;