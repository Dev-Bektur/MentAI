import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTest from "../UserTest/UserTest";
import RestrictedView from "../LimitedView/LimitedView";
import "./TestModal.css";

function TestModal() {
  const [showModal, setShowModal] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const [restricted, setRestricted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isTestPassed = localStorage.getItem("testPassed");
    if (!isTestPassed) {
      const timer = setTimeout(() => setShowModal(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOk = () => {
    setShowModal(false);
    setStartTest(true);
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Если вы отмените, то доступ к сайту будет ограничен. Продолжить?"
      )
    ) {
      setShowModal(false);
      setRestricted(true);
      navigate("/about");
    }
  };

  if (restricted) return <RestrictedView />;

  if (startTest) return <UserTest />;

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Пройдите наш мини-тест для продолжения</h2>
            <div className="modal-buttons">
              <button onClick={handleOk}>Ок</button>
              <button onClick={handleCancel}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TestModal;