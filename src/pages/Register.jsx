import React, { useState } from 'react'
import './Register.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Register() {
  const {t} = useTranslation();
  const [step, setStep] = useState(1); // 1: Выбор роли, 2: Форма
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('') 
  const [photo, setPhoto] = useState(null)

  const navigate = useNavigate()

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isValidPhone = (phone) => /^[+]?\d{7,15}$/.test(phone)

  const selectRole = (selectedRole) => {
    setRole(selectedRole);
    setStep(2); // Переходим к заполнению данных
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    if (!name || !email || !phone || !password) {
      toast.error('Заполните все поля!')
      return
    }
    if (!isValidEmail(email)) {
      toast.error('Проверьте эл. почту!')
      return
    }

    const userData = {
      name,
      email,
      phone,
      password,
      role,
      photo: photo
        ? URL.createObjectURL(photo)
        : 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
    }

    try {
      const response = await fetch('https://mentai-server.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', role); 
        localStorage.setItem('user', JSON.stringify({ ...userData, _id: data.userId }));

        toast.success(`Успешно! Роль: ${role}`);
        window.dispatchEvent(new Event('userChange'))

        setTimeout(() => {
          if (role === 'teacher') {
            navigate('/teacher-dashboard')
          } else if (role === 'visitor') {
            navigate('/') // Посетитель идет на главную
          } else {
            navigate('/profile')
          }
        }, 1500)
      } else {
        toast.error('Ошибка: ' + (data.message || 'Что-то пошло не так'));
      }
    } catch (error) {
      toast.error('Ошибка связи с сервером');
    }
  }

  return (
    <div className='regPage'>
      {step === 1 ? (
        <div className="role-selection-screen animate-fade">
          <h2>{t("whoareu")}</h2>
          <p>{t("chooseRole")}</p>
          <div className="role-grid">
            <div className="role-card" onClick={() => selectRole('teacher')}>
              <div className="role-icon">👨‍🏫</div>
              <h3>{t("teacher1")}</h3>
              <span>{t("teacherTask")}</span>
            </div>
            <div className="role-card" onClick={() => selectRole('student')}>
              <div className="role-icon">🎓</div>
              <h3>{t("student")}</h3>
              <span>{t("studentTask")}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="form-screen animate-fade">
          <button className="back-link" onClick={() => setStep(1)}>← {t("changeRole")} ({role})</button>
          <h2> {t("register")} {role === 'teacher' ? 'Учитель' : role === 'student' ? 'Ученик' : 'Посетитель'}</h2>
          
          <div className="inputs-container">
            <input type='text' placeholder='Имя' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder='Эл.адрес' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='tel' placeholder='Телефон' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <label className="file-label">
              <span>{t("photo")}</span>
              <input type='file' accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} />
            </label>
          </div>

          <div className='regButtons'>
            <button className='do' onClick={handleRegister}>
              {t("createAcc")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register