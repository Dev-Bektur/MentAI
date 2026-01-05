import React from 'react';
import { Link } from 'react-router-dom';
import './ToTheHw.css';

function ToTheHw() {
  // Создаем массив с номерами уроков (можно легко расширить до 100)
  const homeworks = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className='numberhw'>
      <div className="hws-container">
        {homeworks.map((num) => (
          <Link to={`/quest/${num}`} key={num} className="hw-link">
            <div className="hwlist">
              ДЗ №{num}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ToTheHw;
