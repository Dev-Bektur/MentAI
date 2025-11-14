import React from 'react'
import User from '../components/ProfilePage/User'

import './Profile.css'
import LessonRegulation from '../components/LessonRegulation/LessonRegulation'

function Profile() {
  return (
    <div className='userPage'>
      <User/>

      <div className='lessonReg'>
     <LessonRegulation/>
      </div>
    </div>
  )
}

export default Profile
