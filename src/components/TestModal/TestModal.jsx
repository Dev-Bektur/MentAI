import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTest from "../UserTest/UserTest";
import "./TestModal.css";

function TestModal() {
  const [showModal, setShowModal] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isTestPassed = localStorage.getItem("testPassed");
    if (!isTestPassed) {
      const timer = setTimeout(() => setShowModal(true), 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOk = () => {
    setShowModal(false);
    setStartTest(true);
  };


  if (startTest) return <UserTest />;

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Пройдите наш мини-тест для продолжения</h2>
            <div className="modal-buttons">
              <button onClick={handleOk}>Ок</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TestModal;