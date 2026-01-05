import React from 'react';
import { Link } from 'react-router-dom';
import './ToTheLesson.css';

function ToTheLesson() {
  // Создаем массив с номерами уроков (можно легко расширить до 100)
  const lessons = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className='numberlesson'>
      <div className="lessons-container">
        {lessons.map((num) => (
          <Link to={`/lesson/${num}`} key={num} className="lesson-link">
            <div className="lessonlist">
              Урок №{num}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ToTheLesson;