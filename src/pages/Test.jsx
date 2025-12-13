import React, { useEffect, useState } from 'react'
import './Test.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Test() {
  const {t} = useTranslation();
  const [savedResults, setSavedResults] = useState({})

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("testHistory")) || {}
    setSavedResults(data)
  }, [])

  const tests = [
    { name: "Математика", path: "/math", key: "math" },
    { name: "Русский язык", path: "/rus", key: "rus" },
    { name: "Кыргызский тил(аналогия)", path: "/kyrgyz", key: "kyrgyz" },
    { name: "Окуу жана түшүнүү(чтение и понимание)", path: "/kyrgyz_read", key: "kyrgyz_read" },
    { name: "English", path: "/eng", key: "eng", permission: "Premium версия" },
    { name: "Химия", path: "/chemistry", key: "chemistry" , permission: "Premium версия"},
    { name: "Биология", path: "/biology", key: "biology", permission: "Premium версия" },
    { name: "Физика", path: "/physics", key: "physics", permission: "Premium версия" }
  ]

  return (
    <div className='testPage'>
      <h1>{t("test")}</h1>
      
      <ul>
        {tests.map(test => {
          const info = savedResults[test.key] || null

          return (
            <Link to={test.path} key={test.key}>
              <li className={test.key}>
                
                {/* Если были попытки — показываем маленький блок статистики */}
                {info && (
                  <div className="test-info-badge">
                    <p>📅 {info.date}</p>
                    <p>✔ {info.correct}/{info.total}</p>
                  </div>
                )}

                {test.name}

                
                {test.permission && 
                  (
                  <div className='permission'>
                {test.permission}  
                </div>
                )
                }
                
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Test
