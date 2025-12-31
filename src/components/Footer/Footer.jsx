import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t} = useTranslation();
  return (
    <footer>
      <div className='foot-left'>
        <Link to=""><h2>MentAI</h2></Link>
        <p>{t("prepare")}</p>
        <p>{t("modern")}</p>
      </div>

      <div className='foot-right'>
        <div className='soc-media'>
            <img src="https://www.clipartmax.com/png/middle/169-1696957_instagram-icon-instagram-icon-svg-white.png" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyil8zkC1E5ORPwOqHiQpG3UWsPkIgwsF2A&s" alt="" />
            <img src="https://www.svgrepo.com/show/365880/whatsapp-logo-thin.svg" alt="" />
        </div>
        <p>© 2025 BilimHub. {t("right")}</p>
      </div>
    </footer>
  )
}

export default Footer
