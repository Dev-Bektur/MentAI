import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import { FiMenu, FiX, FiUser } from "react-icons/fi"

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'))
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleStorageChange = () => {
      const user = localStorage.getItem('user')
      setIsLoggedIn(!!user)
    }

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

      {/* Desktop right */}
      <div className='head-right'>
        <select>
          <option value="kg">KGZ</option>
          <option value="ru">RUS</option>
        </select>

        {isLoggedIn ? (
          <Link to="/profile">
            <button className='user'>
             Личный кабинет
            </button>
          </Link>
        ) : (
          <>
            <Link to="/register"><button className='reg'>Регистрация</button></Link>
            <Link to="/login"><button className='login'>Войти</button></Link>
          </>
        )}
      </div>

      {/* BURGER ICON */}
      <div className="burger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={32}/> : <FiMenu size={32}/>}
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          <NavLink onClick={() => setMenuOpen(false)} to="/">Главная</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/test">Тесты</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/lesson">Уроки</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/university">Университеты</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about">О нас</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/qa">Вопрос-ответ</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact">Контакты</NavLink>
        </nav>

        <div className="mobile-bottom">
          <select>
            <option value="kg">KGZ</option>
            <option value="ru">RUS</option>
          </select>

          {isLoggedIn ? (
            <Link to="/profile">
              <button className="user"><img src="https://cdn-icons-png.flaticon.com/512/9187/9187532.png" alt="" /></button>
            </Link>
          ) : (
            <>
              <Link to="/register"><button className="reg">Регистрация</button></Link>
              <Link to="/login"><button className="login">Войти</button></Link>
            </>
          )}
        </div>
      </div>

    </header>
  )
}

export default Header
