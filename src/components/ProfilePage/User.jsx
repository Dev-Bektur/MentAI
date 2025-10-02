import React from 'react'
import './User.css'

function User() {
  return (
    <div className='profile'>
      <div className='userInfo'>
        <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" alt="" />
        <div>
        <h1>Имя пользователя</h1>
        <p>Возраст</p>    
        </div> 
      </div>

<div className='myRating'>
    <h2>Статистика знаний:</h2>
<div className='ratingSection'>
        <div className='rating'>
                  <div className='ratingInfo'>
                    <p>Математика</p>
                    <p>20%</p>
                  </div>
                  <div className='ratingShower'></div>
                </div>
                
                <div className='rating'>
                  <div className='ratingInfo'>
                    <p>Аналогия</p>
                    <p>12%</p>
                  </div>
                  <div className='ratingShower'></div>
                </div>

                <div className='rating'>
                  <div className='ratingInfo'>
                    <p>Чтение и понимание</p>
                    <p>23%</p>
                  </div>
                  <div className='ratingShower'></div>
                </div>
        </div>    
</div>
      
    </div>
  )
}

export default User
