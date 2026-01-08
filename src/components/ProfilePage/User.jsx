import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import './User.css';

function User() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(
    JSON.parse(localStorage.getItem('completedLessons')) || []
  );

  const loadData = async () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    const userId = localStorage.getItem('userId');
    
    // Сначала берем то, что реально лежит в браузере (самые свежие начисленные баллы)
    const localCoins = parseInt(localStorage.getItem('mentCoins') || '0');
    const localRank = localStorage.getItem('userRank') || 'Новичок';
    const freshLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];

    setCompletedLessons(freshLessons);
    if (!savedUser) return;

    try {
      const res = await fetch(`https://mentai-server.onrender.com/user/${userId}`);
      if (res.ok) {
        const data = await res.json();
        
        // ВАЖНО: Сравниваем серверные и локальные коины. 
        // Если локально больше (значит только что прошли квест), используем локальные.
        const serverCoins = data.mentCoins || 0;
        const displayCoins = localCoins > serverCoins ? localCoins : serverCoins;

        setUserData({
          ...savedUser,
          coins: displayCoins,
          rank: data.rank || localRank
        });

        // Синхронизируем, если сервер отстал
        if (serverCoins < localCoins) {
          console.log("Сервер еще не обновил баллы, оставляем локальные");
        }
      } else {
        throw new Error();
      }
    } catch (err) {
      // Если сервер упал, просто показываем локальные данные
      setUserData({
        ...savedUser,
        coins: localCoins,
        rank: localRank
      });
    }
  };

  useEffect(() => {
    loadData();

    const handleUpdate = () => {
      console.log("Событие userChange поймано! Обновляю...");
      loadData();
    };

    window.addEventListener('userChange', handleUpdate);
    return () => window.removeEventListener('userChange', handleUpdate);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.dispatchEvent(new Event('userChange')); 
    window.location.href = '/';
  };

  if (!userData) return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Загрузка...</h2>;

  return (
    <div className='profile animate-fade'>
      <div className='userInfo'>
        <img src={userData.photo || 'https://via.placeholder.com/150'} alt="avatar" />
        <div>
          <h1>{userData.name}</h1>
          <p>{userData.email}</p>
        </div>
        <button className='logoutButton' onClick={handleLogout}>{t("out")}</button>
      </div>
      
      <div className='rankingUser'>
        <div className='rank-badge'>🏆 {userData.rank}</div>
        <div className='coins-display'>💰 MentCoins: {userData.coins}</div>
      </div>
      <div className='myRating'>
          <h2>{t("statistic")}</h2>
          <div className='stats-placeholder'>
            <div className="stat-card">
              <span className="stat-number">{completedLessons.length}</span>
              <p>Завершено уроков</p>
            </div>
            <p style={{marginTop: '15px', fontSize: '14px', color: '#888'}}>
              Твой прогресс растет! Продолжай в том же духе.
            </p>
          </div>
        </div>
    </div>
  );
}

export default User;