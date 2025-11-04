import React, { useState } from 'react'
import './Admin.css'

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const adminList = [
    { email: 'admin1@gmail.com', password: '1234' },
    { email: 'admin2@gmail.com', password: '1234' },
    { email: 'admin3@gmail.com', password: '1234' },
    { email: 'admin4@gmail.com', password: '1234' },
    { email: 'admin5@gmail.com', password: '1234' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const admin = adminList.find(
      (a) => a.email === email && a.password === password
    )
    if (admin) {
      localStorage.setItem('admin', JSON.stringify(admin))
      onLogin(admin)
    } else {
      setError('Неверный логин или пароль')
    }
  }

  return (
    <div className="admin-login">
      <h2>Вход в админ-панель</h2>
      <form onSubmit={handleSubmit} className='adminInfo'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Войти</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default AdminLogin