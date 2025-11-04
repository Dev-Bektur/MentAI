import React, { useState } from 'react'
import './Register.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState(null)

  const navigate = useNavigate()

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isValidPhone = (phone) => /^[+]?\d{7,15}$/.test(phone)

  const handleRegister = (e) => {
    e.preventDefault()

    if (!name || !email || !phone || !password) {
      toast.error('Заполните все поля!')
      return
    }
    if (!isValidEmail(email)) {
      toast.error('Проверьте эл. почту и попробуйте снова!')
      return
    }
    if (!isValidPhone(phone)) {
      toast.error('Проверьте номер телефона и попробуйте снова!')
      return
    }

    const userData = {
      name,
      email,
      phone,
      password,
      photo: photo
        ? URL.createObjectURL(photo)
        : 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
    }

    // сохраняем текущего пользователя
    localStorage.setItem('user', JSON.stringify(userData))

    // сохраняем в общий список всех пользователей (для админки)
    const users = JSON.parse(localStorage.getItem('users')) || []
    users.push(userData)
    localStorage.setItem('users', JSON.stringify(users))

    toast.success('Регистрация прошла успешно!')

    setTimeout(() => {
      navigate('/profile')
    }, 1500)
  }

  const handleClear = () => {
    setName('')
    setEmail('')
    setPhone('')
    setPassword('')
    setPhoto(null)
    toast.info('Форма очищена!')
  }

  return (
    <div className='regPage'>
      <h2>Регистрация</h2>
      <input
        type='text'
        placeholder='Введите имя'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Введите эл.адрес'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='tel'
        placeholder='Введите номер телефона'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='password'
        placeholder='Введите пароль'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='file'
        accept='image/*'
        onChange={(e) => setPhoto(e.target.files[0])}
      />

      <div className='regButtons'>
        <button className='clean' onClick={handleClear}>
          Очистить
        </button>
        <button className='do' onClick={handleRegister}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  )
}

export default Register