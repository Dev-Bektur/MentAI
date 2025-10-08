import React, { useState } from 'react';
import './QAPage.css';

function QAPage() {

  const [openIndex, setOpenIndex] = useState(null);

 
  const qaData = [
    {
      question: 'Что такое ОРТ?',
      answer:
        'ОРТ или Общереспубликанское тестирование — это обязательный единый экзамен для поступления в ВУЗы страны. ОРТ заменяет вступительные экзамены и проводится Центром оценки в образовании и методов обучения (ЦООМО) для обеспечения равного доступа к высшему образованию с 2012 года.',
    },
    {
      question: 'Какой проходной балл ОРТ?',
      answer:
        'В 2025/2026 учебном году проходной балл для поступающих на педагогические направления составил 130 баллов ОРТ. В основном проходной балл — 120 баллов.',
    },
    {
      question: 'По каким предметам сдают тестирование?',
      answer: (
        <div>
          <p>
            Все абитуриенты сдают основной тест, который состоит из разделов:
            Математика, Чтение и понимание текста, Аналогии, Практическая
            грамматика родного языка.
          </p>
          <p>Абитуриенты могут выбрать один или несколько предметных тестов:</p>
          <ul className="test-list">
            <li>Химия</li>
            <li>Биология</li>
            <li>Физика</li>
            <li>Математика</li>
            <li>История</li>
            <li>Английский язык</li>
            <li>Кыргызский язык и литература</li>
            <li>Русский язык и литература</li>
          </ul>
        </div>
      ),
    },
  ];

  
  const toggleAnswer = (index) => {
    
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="qa-page">
      {qaData.map((item, index) => (
        <div
          key={index}
          className="question"
          onClick={() => toggleAnswer(index)}
        >
          <h2>{item.question}</h2>

          {openIndex === index && (
            <div className="answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default QAPage;