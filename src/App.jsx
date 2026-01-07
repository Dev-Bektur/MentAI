import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import myRouter from './router'; 
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const name = localStorage.getItem('userName');
    const id = localStorage.getItem('userId');
    const role = localStorage.getItem('userRole'); // Достаем роль

    if (loggedIn === 'true' && name && id) {
      setUser({ name, id, role });
    }
  }, []);

  return (
    <div className="App">
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;