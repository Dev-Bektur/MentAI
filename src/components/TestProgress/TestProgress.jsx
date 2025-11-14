import React, { useEffect, useState } from 'react'
import './TestProgress.css'

function TestProgress() {
  const [results, setResults] = useState({})
  const [animatedValues, setAnimatedValues] = useState({})

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("testResults")) || {}
    setResults(saved)

    // Анимация
    const timers = []
    Object.keys(saved).forEach(subject => {
      setAnimatedValues(prev => ({ ...prev, [subject]: 0 }))
      const timer = setTimeout(() => {
        setAnimatedValues(prev => ({ ...prev, [subject]: saved[subject] }))
      }, 150)
      timers.push(timer)
    })

    return () => timers.forEach(t => clearTimeout(t))
  }, [])

  return (
    <div className="test-progress">
      <h2>Ваш прогресс</h2>

      {Object.keys(results).length === 0 && (
        <p className="empty">Вы пока не проходили тесты.</p>
      )}

      {Object.keys(results).map(subject => (
        <div key={subject} className="progress-item">
          <div className="progress-header">
            <p>{subject}</p>
            <p>{animatedValues[subject] || 0}%</p>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${animatedValues[subject] || 0}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TestProgress
