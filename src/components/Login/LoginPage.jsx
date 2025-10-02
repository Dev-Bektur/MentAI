import React, {useState} from 'react'
import './Log.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     function logIn() {
      const res = signInWithEmailAndPassword(email, password);
      console.log(res);
            
      }
    

  return (
    <div className='whiteLog'>
     <div className='loginPage'>
        <div className='inputs'>
       <input type="email" 
      placeholder='Введите эл.почту'
      value={email}
          onChange={(e) => setEmail(e.target.value)}/>

      <input type="password" 
      placeholder='Введите пароль'
      value={password}
          onChange={(e) => setPassword(e.target.value)} />     
        </div>
      
<div className='login-btn'>
<button className='btn1'  onClick={logIn}>Войти</button>
      <Link to="/register"><button className='btn2'>Еще нету аккаунта?</button> </Link>   
</div>
      
    </div>    
    </div>
   
  )
}     

export default LoginPage
