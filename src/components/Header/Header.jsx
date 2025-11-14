import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.png'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'))

  useEffect(() => {
    const handleStorageChange = () => {
      const user = localStorage.getItem('user')
      setIsLoggedIn(!!user)
    }

    // Слушаем локальные изменения
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('userChange', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('userChange', handleStorageChange)
    }
  }, [])

  return (
    <header>
      <div className='head-left'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <nav className='navigation'>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/test">Тесты</NavLink>
          <NavLink to="/lesson">Уроки</NavLink>
          <NavLink to="/university">Университеты</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/qa">Вопрос-ответ</NavLink>
          <NavLink to="/contact">Контакты</NavLink>
        </nav>
      </div>

      <div className='head-right'>
        <select>
          <option value="kg">KGZ</option>
          <option value="ru">RUS</option>
        </select>

        {isLoggedIn ? (
          <Link to="/profile">
            <button className='user'>Личный кабинет</button>
          </Link>
        ) : (
          <>
            <Link to="/register">
              <button className='reg'>Регистрация</button>
            </Link>
            <Link to="/login">
              <button className='login'>Войти</button>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
