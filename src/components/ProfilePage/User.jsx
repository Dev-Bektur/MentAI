import React from 'react'
import './User.css'
import TestProgress from '../TestProgress/TestProgress'

function User() {
  const [userData, setUserData] = React.useState(
    JSON.parse(localStorage.getItem('user'))
  )

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUserData(null)

    // 👇 событие, чтобы Header узнал, что пользователь вышел
    window.dispatchEvent(new Event('userChange'))
  }

  if (!userData) {
    return <h2>Пользователь не найден. Вернитесь на страницу регистрации.</h2>
  }

  return (
    <div className='profile'>
      <div className='userInfo'>
        <img src={userData.photo} alt="avatar" />
        <div>
          <h1>{userData.name}</h1>
          <p>{userData.email}</p>
          <p>{userData.phone}</p>
        </div>
      </div>

      <div className='myRating'>
        <h2>Статистика знаний:</h2>
        <div className='statistics'>
        <TestProgress/>  
        </div>
        
      </div>

      <button className='logoutButton' onClick={handleLogout}>
        Выйти
      </button>
    </div>
  )
}

export default User
