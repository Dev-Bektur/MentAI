import React from 'react'
import './User.css'
import TestProgress from '../TestProgress/TestProgress'
import { useTranslation } from "react-i18next";

function User() {
  const {t} = useTranslation();
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
    return <h2>{t("notFound")}</h2>
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
        
      <button className='logoutButton' onClick={handleLogout}>
        {t("out")}
      </button>
      </div>

      <div className='myRating'>
        <h2>{t("statistic")}</h2>
        <div className='statistics'>
        <TestProgress/>  
        </div>
        
      </div>

    </div>
  )
}

export default User
