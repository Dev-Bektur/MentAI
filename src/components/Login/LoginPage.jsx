import React, { useState } from 'react'
import './Log.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const logIn = (e) => {
    e.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem('user'))

    if (!storedUser) {
      toast.error('Пользователь не найден! Сначала зарегистрируйтесь.')
      return
    }

    // Проверяем совпадение почты и пароля
    if (email === storedUser.email && password === storedUser.password) {
      toast.success('Вы успешно вошли в аккаунт!')
      setTimeout(() => {
        navigate('/profile')
      }, 1500)
    } else {
      toast.error('Данные неправильные!')
    }
  }

  return (
    <div className='whiteLog'>
      <div className='loginPage'>
        <h2>Вход в аккаунт</h2>

        <div className='inputs'>
          <input
            type="email"
            placeholder='Введите эл. почту'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder='Введите пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='login-btn'>
          <button className='btn1' onClick={logIn}>Войти</button>
          <Link to="/register">
            <button className='btn2'>Еще нет аккаунта?</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage