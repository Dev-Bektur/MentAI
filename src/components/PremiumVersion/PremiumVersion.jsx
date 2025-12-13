import React from "react";
import "./PremiumVersion.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PremiumVersion() {
  const {t} = useTranslation()
  return (
    <div className="premium-overlay">
      <div className="premium-box">
        <h2>🔒 {t("onlyPre")}</h2>
        <p>{t("activePre")}</p>
        <Link to="/aboutPre"><button className="premium-btn">{t("morePre")}</button></Link>
      </div>
    </div>
  );
}

export default PremiumVersion;