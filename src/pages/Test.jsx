import React from 'react'
import './Test.css'

import { Link } from 'react-router-dom'

function Test() {
  return (
    <div className='testPage'>
      <h1>Тесты</h1>
      <ul>
        <Link><li>Математика</li></Link>
        <Link><li>Русский язык</li></Link>
        <Link><li>Кыргызский язык</li></Link>
        <Link><li>Английский язык</li></Link>
        <Link><li>Химия</li></Link>
        <Link><li>Биология</li></Link>
        <Link><li>Физика</li></Link>
      </ul>
    </div>
  )
}

export default Test
