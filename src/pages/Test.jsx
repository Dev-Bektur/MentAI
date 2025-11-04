import React from 'react'
import './Test.css'

import { Link } from 'react-router-dom'

function Test() {
  return (
    <div className='testPage'>
      <h1>Тесты</h1>
      <ul>
        <Link to="/math"><li className='math'>Математика</li></Link>
        <Link><li className='rus'>Русский язык</li></Link>
        <Link to="/kyrgyz"><li className='kgz'>Кыргызский язык(аналогия)</li></Link>
        <Link><li className='kgz1'>Кыргызский язык(чтение и понимание)</li></Link>
        <Link><li className='eng'>Английский язык</li></Link>
        <Link><li className='chemistry'>Химия</li></Link>
        <Link><li className='biology'>Биология</li></Link>
        <Link><li className='physics'>Физика</li></Link>
      </ul>
    </div>
  )
}

export default Test
