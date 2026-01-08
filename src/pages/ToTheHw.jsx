import React from 'react';
import { Link } from 'react-router-dom';
import './ToTheHw.css';

function ToTheHw() {
  // Создаем массив с номерами уроков
  const homeworks = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className='numberhw'>
      <div className="hws-container">
        {homeworks.map((id) => (
          /* ИСПОЛЬЗУЕМ ОБРАТНЫЕ КАВЫЧКИ И ПЕРЕМЕННУЮ ${id} */
          <Link to={`/homew/${id}`} key={id} className="hw-link">
            <div className="hwlist">
              ДЗ №{id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ToTheHw;