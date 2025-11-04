import React, { useEffect, useState } from 'react'
import './Admin.css'

function AdminPanel({ onLogout }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    setUsers(storedUsers)
  }, [])

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((u) => u.email !== email)
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }

  return (
    <div className="admin-panel">
      <h1>Админ-панель</h1>
      <button onClick={onLogout} className="logoutButton">
        Выйти
      </button>

      <h2>Зарегистрированные пользователи:</h2>
      {users.length === 0 ? (
        <p>Пользователей пока нет</p>
      ) : (
        <table border="1" style={{ width: '100%', marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.email)}>
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AdminPanel