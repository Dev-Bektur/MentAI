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

const handleRegister = async (e) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  // =======
  
    e.preventDefault()

    // 1. Валидация
    if (!name || !email || !phone || !password) {
      toast.error('Заполните все поля!')
      return
    }
    if (!isValidEmail(email)) {
      toast.error('Проверьте эл. почту!')
      return
    }
    if (!isValidPhone(phone)) {
      toast.error('Проверьте номер телефона!')
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

    try {
      // 2. Отправка на сервер
      const response = await fetch('https://mentai-server.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      const data = await response.json();

      if (response.ok) {
        // 3. СОХРАНЯЕМ ДАННЫЕ ИЗ БАЗЫ (userId очень важен!)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('userId', data.userId); // Тот самый ID для квестов
        localStorage.setItem('user', JSON.stringify(userData));

        toast.success('Регистрация прошла успешно! Ты в базе.');

        // 4. Оповещаем другие компоненты (например, Header)
        window.dispatchEvent(new Event('userChange'))

        setTimeout(() => {
          navigate('/profile')
        }, 1500)
      } else {
        toast.error('Ошибка: ' + data.message);
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      toast.error('Не удалось связаться с сервером');
    }
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
