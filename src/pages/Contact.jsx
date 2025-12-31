import React from 'react'
import './Contact.css'
import { useTranslation } from 'react-i18next'

function Contact() {
  const {t} = useTranslation();
  return (
    <div className='contactPage'>
      <p>{t("contact")}:</p>
      <p>
        Телефон номер: <span>+996500142319</span>
      </p>
    </div>
  )
}

export default Contact
