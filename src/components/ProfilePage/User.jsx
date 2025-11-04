import React from 'react'
import './User.css'

function User() {
  const [userData, setUserData] = React.useState(
    JSON.parse(localStorage.getItem('user'))
  )

  const handleLogout = () => {
    localStorage.removeItem('user') // удаляем данные пользователя
    setUserData(null) // обновляем состояние
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
        <div className='ratingSection'>
          <div className='rating'>
            <div className='ratingInfo'>
              <p>Математика</p>
              <p>20%</p>
            </div>
            <div className='ratingShower'></div>
          </div>
          <div className='rating'>
            <div className='ratingInfo'>
              <p>Аналогия</p>
              <p>12%</p>
            </div>
            <div className='ratingShower'></div>
          </div>
          <div className='rating'>
            <div className='ratingInfo'>
              <p>Чтение и понимание</p>
              <p>23%</p>
            </div>
            <div className='ratingShower'></div>
          </div>
        </div>
      </div>

      {/* Кнопка выхода */}
      <button className='logoutButton' onClick={handleLogout}>
        Выйти
      </button>
    </div>
  )
}

export default User