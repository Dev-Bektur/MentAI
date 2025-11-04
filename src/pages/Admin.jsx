import React, { useState } from 'react'
import AdminLogin from '../components/AdminLogin/AdminLogin'
import AdminPanel from '../components/AdminLogin/AdminPanel'

function Admin() {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem('admin')) || null
  )

  const handleLogout = () => {
    localStorage.removeItem('admin')
    setAdmin(null)
  }

  return (
    <div>
      {admin ? (
        <AdminPanel onLogout={handleLogout} />
      ) : (
        <AdminLogin onLogin={setAdmin} />
      )}
    </div>
  )
}

export default Admin