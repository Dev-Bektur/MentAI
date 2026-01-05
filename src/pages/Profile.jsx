import React from 'react'
import User from '../components/ProfilePage/User'
import { Link } from 'react-router-dom'

import './Profile.css'
import LessonRegulation from '../components/LessonRegulation/LessonRegulation'
import { useTranslation } from 'react-i18next'
import PremiumVersion from '../components/PremiumVersion/PremiumVersion'

function Profile() {
  const {t} = useTranslation();
  

  return (
    <div className='userPage'>
      <User/>

      <Link to="/aiPlan" className="ai-plan-card">
  <div className="ai-icon">
    <img src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" alt="AI" />
  </div>

  <div className="ai-text">
    <h3>{t("myPlan")}</h3>
    <p>{t("personalStudy")}</p>
    <p>{t("tapToAI")}</p>
  </div>
</Link>

      <div className='lessonReg'>
     <LessonRegulation/>
      </div>

      <div className='probnyiOrt'>
        <p>{t("probnyiOrt")}</p>
        <button>{t("probnyiOrtBtn")}</button>
      </div>
    </div>
  )
}

export default Profile
