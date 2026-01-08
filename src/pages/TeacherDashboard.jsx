import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Импортируем navigate
import { toast } from 'react-toastify';
import './TeacherDashboard.css';
import { useTranslation } from 'react-i18next'

function TeacherDashboard() {
  const {t, i18n} = useTranslation();
  const navigate = useNavigate(); // 2. Инициализируем navigate

  const [activeTab, setActiveTab] = useState('dashboard');
  const [completedLessons, setCompletedLessons] = useState(JSON.parse(localStorage.getItem('completedLessons')) || []);
  const [courses, setCourses] = useState(JSON.parse(localStorage.getItem('teacherCourses')) || []);
  
  const [lessonName, setLessonName] = useState("");
  const [courseData, setCourseData] = useState({ title: '', link: '' });
  
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const WHATSAPP_URL = "https://wa.me/79000000000";

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    localStorage.setItem('teacherCourses', JSON.stringify(courses));
  }, [completedLessons, courses]);

  const handleFinishLesson = (e) => {
    e.preventDefault();
    if (!lessonName.trim()) return toast.warning("Введите тему");
    const newEntry = { 
      id: Date.now(), 
      title: lessonName, 
      date: new Date().toLocaleDateString(), 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
      status: "Пройдено" 
    };
    setCompletedLessons([newEntry, ...completedLessons]);
    setLessonName("");
    toast.success("Урок записан");
  };

  // 3. Добавляем функцию удаления из истории (ее не было)
  const deleteHistoryItem = (id) => {
    setCompletedLessons(completedLessons.filter(item => item.id !== id));
    toast.info("Запись удалена");
  };

  const addCourse = (e) => {
    e.preventDefault();
    if (!courseData.title || !courseData.link) return toast.warning("Заполните все поля");
    const newCourse = { id: Date.now(), ...courseData };
    setCourses([newCourse, ...courses]);
    setCourseData({ title: '', link: '' });
    toast.success("Курс добавлен");
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
    toast.info("Удалено");
  };

  const change = (e) => i18n.changeLanguage(e.target.value);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('isLoggedIn');
    
    window.dispatchEvent(new Event('userChange'));
    
    toast.info("Вы вышли из системы");
    navigate('/'); // Теперь это сработает
  };

  return (
    <div className="teacher-container">
      <header className="teacher-sidebar">
        <div className="teacher-profile-card">
          <img src={user.photo || 'https://via.placeholder.com/100'} alt="Avatar" />
          <div className="profile-info">
            <h3>{user.name}</h3>
            <span className="teacher-badge">{t("teacher2")} MentAI</span>
          </div>
        </div>
        
        <nav className="teacher-nav">
          {/* Кнопка выхода с вашим классом */}
          <button className='logout-btn' onClick={handleLogout}>{t("out") || "Выйти"}</button>
          
          <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>📊 {t("dashboard")}</button>
          <button className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => setActiveTab('courses')}>📚 {t("courses")}</button>
          <button className="nav-item">💬 {t("msg")}</button>

          <select className="lang-select" onChange={change}>
            <option value="ru">RUS</option>
            <option value="kg">KGZ</option>
          </select>
        </nav>
      </header>

      <main className="teacher-main">
        {activeTab === 'dashboard' ? (
          <div className="tab-content animate-fade">
            <div className="teacher-header-row">
              <div className="header-left">
                <h1>{t("panel")}</h1>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">🚀 {t("startLes")} (WhatsApp)</a>
              </div>
            </div>

            <div className="teacher-content-layout">
              <section className="input-section card">
                <h2>📝 {t("pastedLes")}</h2>
                <form onSubmit={handleFinishLesson} className="lesson-form">
                  <input type="text" placeholder="Название темы..." value={lessonName} onChange={(e) => setLessonName(e.target.value)} />
                  <button type="submit">{t("add")}</button>
                </form>
              </section>

              <section className="history-section excel-card">
                <div className="excel-header"><h2>📖 {t("lessonList")}</h2></div>
                <div className="excel-table-wrapper">
                  {completedLessons.length === 0 ? <p className="empty-p">{t("empty")}</p> : (
                    <table className="excel-table">
                      <thead><tr><th>№</th><th>Тема</th><th>Дата</th><th>Статус</th><th></th></tr></thead>
                      <tbody>
                        {completedLessons.map((item, idx) => (
                          <tr key={item.id}>
                            <td>{completedLessons.length - idx}</td>
                            <td className="topic-name">{item.title}</td>
                            <td>{item.date}</td>
                            <td><span className="excel-status">✅ {t("past")}</span></td>
                            <td><button onClick={() => deleteHistoryItem(item.id)} className="excel-del-btn">✕</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="tab-content animate-fade">
            <h1>{t("course")}</h1>
            <section className="input-section card">
              <h2>{t("add1")}</h2>
              <form onSubmit={addCourse} className="course-form-row">
                <input className='courseInput' type="text" placeholder="Название темы..." value={courseData.title} onChange={(e) => setCourseData({...courseData, title: e.target.value})} />
                <input className='courseInput' type="text" placeholder="Ссылка..." value={courseData.link} onChange={(e) => setCourseData({...courseData, link: e.target.value})} />
                <button type="submit" className="saveCourse">{t("save")}</button>
              </form>
            </section>

            <section className="history-section excel-card">
              <div className="excel-header">
                <h2>📋 {t("courseList")}</h2>
                <span className="count-label">{t("material")}: {courses.length}</span>
              </div>
              <div className="excel-table-wrapper">
                {courses.length === 0 ? <p className="empty-p">{t("material1")}</p> : (
                  <table className="excel-table">
                    <thead><tr><th>№</th><th>{t("theme")}</th><th>{t("link")}</th><th>{t("motion")}</th></tr></thead>
                    <tbody>
                      {courses.map((course, index) => (
                        <tr key={course.id}>
                          <td>{index + 1}</td>
                          <td className="topic-name">{course.title}</td>
                          <td className="link-cell"><a href={course.link} target="_blank" rel="noopener noreferrer">🔗 {t("viaLink")}</a></td>
                          <td><button onClick={() => deleteCourse(course.id)} className="excel-del-btn">{t("delete")}</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default TeacherDashboard;