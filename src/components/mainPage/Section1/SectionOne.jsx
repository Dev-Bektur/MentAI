import React from 'react'
import './One.scss'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function SectionOne() {

  const navigate = useNavigate()

  // ЛОГИКА КНОПКИ "Смотреть план"
  const handlePlanClick = () => {
    const user = localStorage.getItem("user")

    if (!user) {
      toast.error("Сначала зарегистрируйтесь!")
      navigate("/register")
      return
    }

    navigate("/profile")
  }

  return (
    <section className='sec-1'>
      <div className='secOne-left'>
        <div className='bilimHub'>
          <h1>BilimHub</h1>
          <p>
            Готовьтесь к OPT с ИИ-планами обучения. Персональные траектории, умная практика
            и реальный прогресс для старшеклассников Кыргызстана.
          </p>
        </div>

        <Link to="./test">
          <button className='toTestBtn'>
            Перейти к тестам
            <img
              src="https://media.istockphoto.com/id/1069730414/vector/start-up-line-icon.jpg?s=612x612&w=0&k=20&c=v5_Rsg8DeHzr0CJwwIalFIN26s5deiBoM6yC11nwclM="
              alt=""
            />
          </button>
        </Link>

        <div className='buklet'>
          <div>
            <h3>+1200</h3>
            <p>Вопросов для практики</p>
          </div>
          <div className='div2'>
            <h3>+7</h3>
            <p>предметов</p>
          </div>
          <div className='div3'>
            <h3>500 KGS</h3>
            <p>в месяц</p>
          </div>
        </div>
      </div>

      <div className='secOne-right'>
        <div className='plan'>
          <img
            src="https://img.freepik.com/premium-vector/ai-artificial-brain-chip-intelligence-icon-blue-color-design_996135-40603.jpg"
            alt="plan"
          />
          <h2>Ваш ИИ-план</h2>
        </div>

        <p>
          Пройдите тесты по предметам и узнайте свой уровень. После прохождения тестов вы
          получите результаты и план обучения от умного искусственного интеллекта.
          Учиться с нами свежо и эффектно!
        </p>

        {/* КНОПКА С ЛОГИКОЙ */}
        <button className='planShow' onClick={handlePlanClick}>
          Смотреть полный план
        </button>
      </div>
    </section>
  )
}

export default SectionOne
