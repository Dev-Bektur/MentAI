import React, { useState } from 'react';
import './Log.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.warning("Введите почту и пароль");
    }

    setLoading(true);

    try {
      // Отправляем запрос на сервер
      const response = await fetch('https://mentai-server.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      // Сначала получаем текстовый ответ, чтобы избежать ошибок парсинга JSON
      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        data = { message: "Ошибка формата данных на сервере" };
      }

      if (response.ok) {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userRole', data.role);
  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('userId', data.user._id);
  
  // ИСПОЛЬЗУЕМ String(), чтобы данные всегда сохранялись корректно
  // Если у пользователя в базе нет монет, ставим '0'
  const coins = data.user.mentCoins !== undefined ? String(data.user.mentCoins) : '0';
  localStorage.setItem('mentCoins', coins);
  
  localStorage.setItem('userRank', data.user.rank || 'Новичок');

  toast.success(`С возвращением, ${data.user.name}!`);
  window.dispatchEvent(new Event('userChange'));
} else {
        // Ошибка от сервера (например, неверный пароль)
        toast.error(data.message || 'Ошибка входа');
      }
    } catch (error) {
      console.error("Ошибка при входе:", error);
      // Если ошибка вызвана тем, что сервер Render "спит"
      if (error.message.includes('fetch')) {
        toast.error('Сервер просыпается. Пожалуйста, подождите 20-30 секунд и попробуйте снова.');
      } else {
        toast.error('Не удалось связаться с сервером');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='whiteLog animate-fade'>
      <div className='loginPage card'>
        <h2>Вход в аккаунт</h2>

        <form onSubmit={logIn} className='inputs'>
          <input
            type="email"
            placeholder='Введите эл. почту'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <input
            type="password"
            placeholder='Введите пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          
          <div className='login-btn'>
            <button 
                type="submit" 
                className='btn1' 
                disabled={loading}
            >
              {loading ? 'Загрузка...' : 'Войти'}
            </button>
            
            <Link to="/register" className='regbtn'>
              <span className='btn2-text'>Еще нет аккаунта? Зарегистрироваться</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;