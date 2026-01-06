import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './Admin.css'

function AdminPanel({ onLogout }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  // Функция для загрузки пользователей с сервера
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://mentai-server.onrender.com/api/users')
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      } else {
        toast.error('Не удалось загрузить список пользователей')
      }
    } catch (error) {
      console.error('Ошибка:', error)
      toast.error('Ошибка связи с сервером')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Вы уверены, что хотите удалить этого пользователя?')) return

    try {
      const response = await fetch(`https://mentai-server.onrender.com/api/user/${userId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setUsers(users.filter((u) => u._id !== userId))
        toast.success('Пользователь удален')
      } else {
        toast.error('Ошибка при удалении')
      }
    } catch (error) {
      toast.error('Ошибка сервера')
    }
  }

  if (loading) return <h2 style={{ textAlign: 'center' }}>Загрузка данных...</h2>

  return (
    <div className="admin-panel">
      <h1>Админ-панель</h1>
      <button onClick={onLogout} className="logoutButton">Выйти</button>

      <h2>Зарегистрированные пользователи (из MongoDB):</h2>
      {users.length === 0 ? (
        <p>Пользователей пока нет в базе данных</p>
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
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user._id)}>Удалить</button>
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