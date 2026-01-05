import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Subjects.css';
import { useTranslation } from 'react-i18next';

const subjects = [
  { id: 'math', title: 'Математика', icon: '➕', color: '#4facfe' },
  { id: 'russian', title: 'Русский язык', icon: '🅰️', color: '#ff0844' },
  { id: 'kg-analogy', title: 'Кыргыз тили (Аналогия)', icon: '🧠', color: '#00b894' },
  { id: 'kg-reading', title: 'Кыргыз тили (Текст)', icon: '📖', color: '#fdcb6e' },
  { id: 'english', title: 'Английский язык', icon: '🔤', color: '#6c5ce7' },
  { id: 'chemistry', title: 'Химия', icon: '🧪', color: '#e84393' },
  { id: 'biology', title: 'Биология', icon: '🌿', color: '#27ae60' },
  { id: 'physics', title: 'Физика', icon: '⚡', color: '#e67e22' },
];

function SubjectsOfHw() {
    const {t} = useTranslation();

  return (
    <div className="subjects-page">
      <h1>Выберите предмет для подготовки</h1>
      <div className="subjects-grid">
        {subjects.map((item) => (
         <Link to="/toTheH"> <div 
            key={item.id} 
            className="subject-card" 
            style={{ '--subject-color': item.color }}
          >
            <div className="subject-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{t("startToStudy")} →</p>
          </div> </Link>
        ))}
      </div>
    </div>
  );
}

export default SubjectsOfHw;