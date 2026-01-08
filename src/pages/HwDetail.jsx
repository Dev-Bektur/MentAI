import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function HwDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleComplete = async () => {
    // 1. Получаем список пройденных уроков
    const completed = JSON.parse(localStorage.getItem('completedLessons')) || [];
    const alreadyDone = completed.find(item => item.id === id);

    if (!alreadyDone) {
      const lessonCoins = 50; 
      
      // 2. Обновляем список выполненных уроков
      const newList = [...completed, { id: id, date: new Date().toLocaleDateString() }];
      localStorage.setItem('completedLessons', JSON.stringify(newList));

      // 3. Обновляем монеты локально
      const currentTotal = parseInt(localStorage.getItem('mentCoins') || '0');
      localStorage.setItem('mentCoins', (currentTotal + lessonCoins).toString());

      // 4. Пробуем отправить данные на сервер
      const userId = localStorage.getItem('userId');
      try {
        await fetch('https://mentai-server.onrender.com/api/update-coins', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, coinsToAdd: lessonCoins })
        });
      } catch (e) { 
        console.error("Ошибка синхронизации монет"); 
      }

      // 5. Уведомляем другие компоненты (Header, User) об изменениях
      window.dispatchEvent(new Event('userChange'));
      toast.success(`Урок завершен! +${lessonCoins} монет`);
    } else {
      toast.info("Вы уже получили награду за этот урок");
    }
  };

  return (
    <div className='videoLesson'>
      <button onClick={() => navigate(-1)} className='backBtn'>← Назад</button>
      <h1>ДЗ №{id}</h1>
      
      <div className='videoScreen'>
        <p>Здесь видеозапись урока №{id}</p>
      </div>

      <div className='lessonBtn'>
        <button className='didntUnderstood' onClick={handleComplete}>
          Задание выполнено!
        </button>
        
        <Link to={`/quest/${id}`}>
          <button className='toHw'>Перейти к квесту</button>
        </Link>
      </div>
    </div>
  );
}

export default HwDetail;