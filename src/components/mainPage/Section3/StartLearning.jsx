import React from "react";
import "./Three.css";
import goalIcon from "../../../assets/svg/goal.svg";
import chartIcon from "../../../assets/svg/chart.svg";

function StartLearning() {
  return (
    <section className="start-learning">
      <div className="blue-card">
        <div className="text">
          <h1>
            Начните адаптивное обучение <br /> уже сегодня
          </h1>
          <p>
            Откройте персональный план всего за <strong>400–500 KGS</strong> в
            месяц. Отменить можно в любое время.
          </p>

          <div className="buttons">
            <button className="create-btn">Создать профиль</button>
            <button className="learn-btn">Узнать больше</button>
          </div>
        </div>

        <div className="icons">
          <div className="icon">
            <img src={goalIcon} alt="" />
            <p>Цели</p>
          </div>
          <div className="icon">
            <img src={chartIcon} alt="" />
            <p>График</p>
          </div>
          <div className="icon">
            <img src="https://as1.ftcdn.net/jpg/04/33/52/12/1000_F_433521271_PkjLa1JHBYtT7CNQJ6ogwd1mH1bw9SuP.jpg" alt="" />
            <p>ИИ</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartLearning;