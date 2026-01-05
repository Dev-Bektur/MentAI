import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import './User.css';

function User() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      const userId = localStorage.getItem('userId');

      if (!savedUser) return;

      try {
        // Пробуем взять свежие данные с сервера
        const res = await fetch(`http://localhost:5000/api/user/${userId}`);
        const data = await res.json();
        
        setUserData({
          ...savedUser,
          coins: data.mentCoins,
          rank: data.rank
        });
      } catch (err) {
        // Если сервер офлайн, берем то, что есть в браузере
        setUserData({
          ...savedUser,
          coins: localStorage.getItem('mentCoins') || 0,
          rank: localStorage.getItem('userRank') || 'Новичок'
        });
      }
    };

    loadData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  if (!userData) return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Загрузка...</h2>;

  return (
    <div className='profile'>
      <div className='userInfo'>
        <img src={userData.photo || 'https://via.placeholder.com/150'} alt="avatar" />
        <div>
          <h1>{userData.name}</h1>
          <p>{userData.email}</p>
        </div>
        <button className='logoutButton' onClick={handleLogout}>{t("out")}</button>
      </div>
      
      <div className='rankingUser'>
        <div className='rank-badge'>{userData.rank}</div>
        <div className='coins-display'>💰 MentCoins: {userData.coins}</div>
      </div>

      <div className='myRating'>
        <h2>{t("statistic")}</h2>
        <div className='stats-placeholder'>
           <p>Здесь скоро будет график твоего прогресса!</p>
        </div>
      </div>
    </div>
  );
}

export default User;