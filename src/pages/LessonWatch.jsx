import React from 'react'
import { Link } from 'react-router-dom'

import './LessonWatch.css'

function LessonWatch() {
  return (
    <div className='watchLesson'>
      <h1>Уроки</h1>
      <div className='lessonList'>
        <Link>Урок №1</Link>
        <Link>Урок №2</Link>
        <Link>Урок №3</Link>
        <Link>Урок №4</Link>
        <Link>Урок №5</Link>
        <Link>Урок №6</Link>
        <Link>Урок №7</Link>
        <Link>Урок №8</Link>
        <Link>Урок №9</Link>
        <Link>Урок №10</Link>
      </div>
    </div>
  )
}

export default LessonWatch
