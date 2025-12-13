import React from 'react'
import './AboutPremium.css'
import { useTranslation } from 'react-i18next'

function AboutPremium() {
  const {t} = useTranslation();
  
  return (
    <div className='preVers'>
      <h1>Premium-версия</h1>
      <p className='preVersText'>{t("preVers")}</p>
      <ul>
        <li>{t("preLi1")}
          <p>{t("preP1")}</p>
        </li>
        <li>{t("preLi2")}
          <p>{t("preP2")}</p>
        </li>
        <li>{t("preLi3")}
          <p>{t("preP3")}</p>
        </li>
        <li>{t("preLi4")}
          <p>{t("preP4")}</p>
        </li>
        <li>{t("preLi5")}
          <p>{t("preP5")}</p>
        </li>
      </ul>

      <button className='premiumBtn'>{t("premiumBtn")}</button>
    </div>
  )
}

export default AboutPremium
