import React from 'react'
import './One.scss'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

function SectionOne() {
  const {t} = useTranslation();

  const navigate = useNavigate()

  // ЛОГИКА КНОПКИ "Смотреть план"
  const handlePlanClick = () => {
    const user = localStorage.getItem("user")

    if (!user) {
      toast.error("Сначала зарегистрируйтесь!")
      navigate("/register")
      return
    }

    navigate("/chatBot")
  }

  return (
    <section className='sec-1'>
      <div className='secOne-left'>
        <div className='bilimHub'>
          <h1>MentAI</h1>
          <p>
            {t("bilimhub")}
          </p>
        </div>

        <Link to="./test">
          <button className='toTestBtn'>
            {t("toTheTestBtn")}
            <img
              src="https://media.istockphoto.com/id/1069730414/vector/start-up-line-icon.jpg?s=612x612&w=0&k=20&c=v5_Rsg8DeHzr0CJwwIalFIN26s5deiBoM6yC11nwclM="
              alt=""
            />
          </button>
        </Link>

        <div className='buklet'>
          <div>
            <h3>+1200</h3>
            <p>{t("praticeQuestion")}</p>
          </div>
          <div className='div2'>
            <h3>+7</h3>
            <p>{t("subject")}</p>
          </div>
          <div className='div3'>
            <h3>500 KGS</h3>
            <p>{t("month")}</p>
          </div>
        </div>
      </div>

      <div className='secOne-right'>
        <div className='plan'>
          <img
            src="https://img.freepik.com/premium-vector/ai-artificial-brain-chip-intelligence-icon-blue-color-design_996135-40603.jpg"
            alt="plan"
          />
          <h2>{t("AIplan")}</h2>
        </div>

        <p>
          {t("planText")}
        </p>

        {/* КНОПКА С ЛОГИКОЙ */}
        <button className='planShow' onClick={handlePlanClick}>
          {t("toPlanBtn")}
        </button>
      </div>
    </section>
  )
}

export default SectionOne
