import React from 'react'
import { Link } from 'react-router-dom'

import './Homework.css'

function Homeworks() {
  return (
    <div className='homeworkPage'>
      <h1>Домашние задания</h1>
      <div className='homeworkList'>
        <Link>Домашнее задание №1</Link>
        <Link>Домашнее задание №2</Link>
        <Link>Домашнее задание №3</Link>
        <Link>Домашнее задание №4</Link>
        <Link>Домашнее задание №5</Link>
        <Link>Домашнее задание №6</Link>
        <Link>Домашнее задание №7</Link>
        <Link>Домашнее задание №8</Link>
        <Link>Домашнее задание №9</Link>
        <Link>Домашнее задание №10</Link>
      </div>
    </div>
  )
}

export default Homeworks
