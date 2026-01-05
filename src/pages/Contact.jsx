import React from 'react'
import './Contact.css'
import { useTranslation } from 'react-i18next'

function Contact() {
  const {t} = useTranslation();
  return (
    <div className='contactPage'>
      <h2>{t("contact")}:</h2>
      <p>
        Телефон номер: / WhatsApp: <span>+996500142319</span>
      </p>
      <p>
        Telegram: <span>@dshbekov</span>
      </p>
    </div>
  )
}

export default Contact
