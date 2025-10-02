import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


import logo from '../../assets/image/logo.png'

function Header() {
  return (
    <header>
      <div className='head-left'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>

        <nav className='navigation'>
            <NavLink to="">Главная</NavLink>
            <NavLink to="/test">Тесты</NavLink>
            <NavLink to="/lesson">Уроки</NavLink>
            <NavLink to="/university">Университеты</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/qa">Вопрос-ответ</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
            <NavLink to="/profile">Личный кабинет</NavLink>
        </nav>
      </div>

      <div className='head-right'>
        <select>
            <option value="kg">KGZ</option>
            <option value="ru">RUS</option>
        </select>

        <Link to="/register"><button className='reg'>Регистрация</button></Link>
        <Link to="login"><button className='login'>Войти</button></Link>
      </div>
    </header>
  )
}

export default Header
