import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './LessonDetail.css'

function HwDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNotUnderstood = () => {
    alert("Свяжись с учителем MentAi в Telegram: @teacher_handle \nИли WhatsApp: +996xxxxxxxxx");
  };

  return (
    <div className='videoLesson'>
      <button onClick={() => navigate(-1)} className='backBtn'>← Назад</button>
      
      <h1>ДЗ №{id}</h1>
      
      {/* Плеер для видео (пока заглушка) */}
      <div className='videoScreen'>
        <p>Здесь будет видеозапись урока №{id}</p>
      </div>

      <div className='lessonBtn'>
        <button className='didntUnderstood'  onClick={handleNotUnderstood}>
          Задание выполнено!
        </button>
        
        <button className='toHw' onClick={() => alert("Переход к списку уроков")}>
          Перейти к урокам
        </button>
      </div>
    </div>
  );
}

export default HwDetail;