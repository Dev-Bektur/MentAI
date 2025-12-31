import React from "react";
import "./Three.css";
import goalIcon from "../../../assets/svg/goal.svg";
import chartIcon from "../../../assets/svg/chart.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function StartLearning() {
  const {t} = useTranslation();
  return (
    <section className="start-learning">
      <div className="blue-card">
        <div className="text">
          <h1>
            {t("startLesson")} <br /> {t("today")}
          </h1>

          <div className="buttons">
          <Link to="/register" className="create-btn">{t("createProfile")}</Link>
           <Link to="/about" className="learn-btn">{t("more")}</Link>
          </div>
        </div>

        <div className="icons">
          <div className="icon">
            <img src={goalIcon} alt="" />
            <p>{t("goal")}</p>
          </div>
          <div className="icon">
            <img src={chartIcon} alt="" />
            <p>{t("time")}</p>
          </div>
          <div className="icon">
            <img src="https://as1.ftcdn.net/jpg/04/33/52/12/1000_F_433521271_PkjLa1JHBYtT7CNQJ6ogwd1mH1bw9SuP.jpg" alt="" />
            <p>{t("Ai")}</p> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartLearning;