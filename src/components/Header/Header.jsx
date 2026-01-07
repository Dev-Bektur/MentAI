import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import { FiMenu, FiX, FiUser } from "react-icons/fi"
import { useTranslation } from 'react-i18next'


function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'))
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation();

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

  const change = (e) => i18n.changeLanguage(e.target.value)

  return (
    <header>
      <div className='head-left'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <nav className='navigation'>
          <NavLink to="/">{t("main")}</NavLink>
          <NavLink to="/test">{t("test")}</NavLink>
          <NavLink to="/lesson">{t("lesson")}</NavLink>
          <NavLink to="/university">{t("uni")}</NavLink>
          <NavLink to="/about">{t("about")}</NavLink>
          <NavLink to="/qa">{t("qa")}</NavLink>
          <NavLink to="/contact">{t("contact")}</NavLink>
          {/* <NavLink to="/aboutPre">Premium-версия</NavLink> */}
        </nav>
      </div>

      {/* Desktop right */}
      <div className='head-right'>
        <select onChange={change}>
          <option value="ru">RUS</option>
          <option value="kg">KGZ</option>
        </select>

        {isLoggedIn ? (
          <Link to="/profile">
            <button className='user'>
             {t("profile")}
            </button>
          </Link>
        ) : (
          <>
            <Link to="/register"><button className='reg'>{t("reg")}</button></Link>
            <Link to="/login"><button className='login'>{t("log")}</button></Link>
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
          <NavLink onClick={() => setMenuOpen(false)} to="/">{t("main")}</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/test">{t("test")}</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/lesson">{t("lesson")}</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/university">{t("uni")}</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about">{t("about")}</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/qa">{t("qa")}</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact">{t("contact")}</NavLink>
          {/* <NavLink onClick={() => setMenuOpen(false)} to="/aboutPre">Premium-версия</NavLink> */}
        </nav>

        <div className="mobile-bottom">
          <select onChange={change}>
            <option value="ru">RUS</option>
            <option value="kg">KGZ</option>
          </select>

          {isLoggedIn ? (
            <Link to="/profile">
              <button className="user">{t("profile")}</button>
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
