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
          <a href="https://www.instagram.com/mentoraikg?igsh=MWVzeWxpZ2pzb3c5Mg==">
          <img src="https://www.clipartmax.com/png/middle/169-1696957_instagram-icon-instagram-icon-svg-white.png" alt="" />
          </a>

          <a href="https://t.me/+niWBKt9xKUs4YWJi">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyil8zkC1E5ORPwOqHiQpG3UWsPkIgwsF2A&s" alt="" />
          </a>  

          <a href="https://chat.whatsapp.com/F8ENaNhniGH6ubUNwJdffd">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLgWiJ9DJkd1qWGQVnCeXD81fY0e0MEBjlg&s" alt="" />
          </a>
        </div>
        <p>© 2026 BilimHub. {t("right")}</p>
      </div>
    </footer>
  )
}

export default Footer
