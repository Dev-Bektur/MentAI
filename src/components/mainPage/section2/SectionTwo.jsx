import React from 'react'
import './Two.css'

function SectionTwo() {
  return (
    <div className='sec-2'>
      <div className="card">
        <div className='cardBook'>
            <div><img src="https://static.vecteezy.com/system/resources/thumbnails/017/032/397/small/book-icon-free-vector.jpg" alt="" /></div>
            <p>Тесты ОРТ</p>
        </div>
        <h3>Практика по предметам с мгновенной обратной связью и разбором ошибок.</h3>
      </div>

      <div className="card">
        <div className='cardBook'>
            <div><img src="https://t4.ftcdn.net/jpg/03/55/07/55/360_F_355075519_imkg8DhsVrvsPMrf9WR8VZ8dblJXJMPs.jpg" alt="" /></div>
            <p>ИИ‑план</p>
        </div>
        <h3>Ежедневные/еженедельные задания, нацеленные на слабые темы для максимального роста.</h3>
      </div>

      <div className="card">
        <div className='cardBook'>
            <div><img src="https://static.thenounproject.com/png/1724957-200.png" alt="" /></div>
            <p>Ресурсы</p>
        </div>
        <h3>Гайды, советы и материалы под выбранную специальность.</h3>
      </div>
    </div>
  )
}

export default SectionTwo
