import React from 'react'
import { Link } from 'react-router-dom'

import './LessonPage.css'
import { useTranslation } from 'react-i18next'

function Lessons() {
  const {t} = useTranslation();
  return (
    <div className='lessonPage'>
      <Link to="/subjects" className='toTheLesson'>{t("lesson")}</Link>
      <Link to="/subOfHw" className='toTheHomework'>{t("hw")}</Link>
    </div>
  )
}

export default Lessons
