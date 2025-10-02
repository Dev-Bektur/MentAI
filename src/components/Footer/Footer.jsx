import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className='foot-left'>
        <Link to=""><h2>BilimHub</h2></Link>
        <p>Адаптивное обучение для OPT, ЕНТ, ЕГЭ и других экзаменов</p>
        <p>Современно и понятно для подростков</p>
      </div>

      <div className='foot-right'>
        <div className='soc-media'>
            <img src="https://www.clipartmax.com/png/middle/169-1696957_instagram-icon-instagram-icon-svg-white.png" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyil8zkC1E5ORPwOqHiQpG3UWsPkIgwsF2A&s" alt="" />
            <img src="https://www.svgrepo.com/show/365880/whatsapp-logo-thin.svg" alt="" />
        </div>
        <p>© 2025 BilimHub. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
