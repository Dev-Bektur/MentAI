import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import myRouter from './router'; // Убедись, что путь к router правильный
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Проверяем данные в браузере
    const loggedIn = localStorage.getItem('isLoggedIn');
    const name = localStorage.getItem('userName');
    const id = localStorage.getItem('userId');

    if (loggedIn === 'true' && name && id) {
      setUser({ name, id });
    }
  }, []);

  return (
    <div className="App">
      {/* Передаем состояние пользователя в RouterProvider если нужно, 
          но пока просто рендерим роутер */}
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;