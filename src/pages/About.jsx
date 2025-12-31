import React from 'react'
import './About.css'
import { useTranslation } from 'react-i18next'

function About() {
  const {t} = useTranslation();
  return (
    <div className='aboutUs'>
      <h1>{t("about")} — <span>MentAI</span></h1>

<p><span>MentAI</span> — {t("bilimHub")}</p>



<h1>{t("mission")}</h1>

<p>{t("text")} <span>MentAI</span> {t("text1")}</p>


<h1>{t("approach")}</h1>
<ul>
  <li>{t("text2")}</li>
  <li>{t("text3")}</li>
  <li>{t("text4")}</li>
  <li>{t("text5")}</li>
</ul>


<h1>{t("why")} <span>MentAI</span></h1>
<ul>
  <li>{t("text6")}</li>
  <li>{t("text7")}</li>
  <li>{t("text8")}</li>
  <li>{t("text9")}</li>
</ul>


<h1>{t("value")}</h1>
<ul>
  <li>{t("text10")}</li>
  <li>{t("text11")}</li>
  <li>{t("text12")}</li>
  <li>{t("text13")}</li>
</ul>


<h1 className='goal'>{t("ourGoal")}</h1>

<p className='goalText'>{t("text14")}</p>

<p className='goalText'><span>MentAI</span>  — {t("text15")}</p>
    </div>
  )
}

export default About
