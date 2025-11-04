import React, { useState, useEffect } from "react";
import './Math.css'
import './Analogia.css'

const questions = [
  {
    id: 1,
    question: "Кымыз:сүт",
    options: ["а) Алма:данек", "б)Килем:кийиз", "в) Чөбөгө:каймак", "г) Жип:кездеме"],
    answer: "в) Чөбөгө:каймак"
  },
  {
    id: 2,
    question: "Чопо:идиш",
    options: [
      "а) Суу:көл", "б) Жыгач:эмерек", "в) Клей:конверт", "г) Булут:асман"
    ],
    answer: "б) Жыгач:эмерек"
  },
  {
    id: 3,
    question: "Куртка:сыдырма",
    options: ["а) Тон:чөнтөк", "б) Батинке:буу", "в) Чапан:төөнөгүч", "г) Чыптама:топчу"],
    answer: "г) Чыптама:топчу"
  },
  {
    id: 4,
    question: "Лагман:кесме",
    options: ["а) Камыр:ун", "б) Бешбармак:эт", "в) Тамак:туз", "г) Кымыз:сүт"],
    answer: "б) Бешбармак:эт"
  },
  {
    id: 5,
    question: "Ботко:таруу",
    options: ["а) Как:өрүк", "б) Ун:буудай", "в) Каймак:сүт", "г) Шорпо:буудай"],
    answer: "г) Шорпо:буудай"
  },
  {
    id: 6,
    question: "Жаан:баткак",
    options: ["а) Шамал:чаң", "б) Кар:кыш ", "в) Суу:нөшөр ", "г) Күз:жалбырак "],
    answer: "а) Шамал:чаң"
  },
  {
    id: 7,
    question: "Кошуу:көбөйүү ",
    options: ["а) Боёо:кооз", "б) Терметүү:термелүү", "в) Ырдоо:угуу", "г) Сүйлөө:күлдүрүү"],
    answer: "б) Терметүү:термелүү"
  },
  {
    id: 8,
    question: "Мектеп:билимдүү",
    options: ["а) Салон:сулуу", "б) Спорт зал:күчтүү", "в) Бассейн:суучул", "г) Оорукана:оорулуу"],
    answer: "б) Спорт зал:күчтүү"
  },
  {
    id: 9,
    question: "Айна:кир",
    options: ["а) Сугаруу:соолуу", "б) Чаптоо:сынык", "в) Урушуу:тентек", "г) Дары:оору"],
    answer: "г) Дары:оору"
  },
  {
    id: 10,
    question: "беш бармак:эт",
    options: ["а) Нан:күкүм", "б) Калем:шарик", "в) Стакан:айнек", "г) Китеп:клей"],
    answer: "в) Стакан:айнек"
  },
  {
    id: 11,
    question: "Мозаика:плитка",
    options: ["а) Фильм:кадр", "б) Дубал:топурак", "в) Тамак:рецепт", "г) Тамак:рецепт"],
    answer: "б) Дубал:топурак"
  },
  {
    id: 12,
    question: "Акындык:өнөр",
    options: ["а) Ууручулук:кылмыш", "б) Тынчтык:турмуш", "в) Сабырдуулук:эмгек", "г) Кыш:аба ырайы"],
    answer: "а) Ууручулук:кылмыш"
  },
  {
    id: 13,
    question: "Барак:китеп",
    options: ["а) Барак:китеп", "б) Калем:пенал", "в) Нота:обон", "г) мүнөт:саат"],
    answer: "г) мүнөт:саат"
  },
  {
    id: 14,
    question: "Тонна:центнер",
    options: ["а) Миля:миллиметр", "б) Доллар:сом", "в) Жыл:квартал", "г) Дубал:кирпич"],
    answer: "в) Жыл:квартал"
  },
  {
    id: 15,
    question: "Кыш:лыжа",
    options: ["а) Жаз:велосипед", "б) Күз:чуркоо", "в) Жай:скутер", "г) Кыш:муз аянтчасы"],
    answer: "в) Жай:скутер"
  },
  {
    id: 16,
    question: "Дөңгөлөк:тоголок",
    options: ["а) Китеп:пайдалануу", "б) Кино:үйрөтүүчү", "в) Китеп:төрт бурчтук", "г) Алмаз:түссүз"],
    answer: "в) Китеп:төрт бурчтук"
  },
  {
    id: 17,
    question: "Ыр:акын",
    options: ["а) Роман:автор", "б) Чыгарма:жазуучу", "в) Дары:фармацевт", "г) Мелодия:аспап"],
    answer: "а) Роман:автор"
  },
  {
    id: 18,
    question: "Кылмыш:жаза",
    options: ["а) Күнөө:тозок", "б) Соода:товар", "в) Сүйүү:бакыт", "г) Жумуш:акы"],
    answer: "г) Жумуш:акы"
  },
  {
    id: 19,
    question: "Жашоо:татаал",
    options: ["а) Өмүр:ыракаттуу", "б) Турмуш:максатсыз", "в) Бакыт:ийгиликтүү", "г) Эгемендүүлүк:баалуу"],
    answer: "а) Өмүр:ыракаттуу"
  },
  {
    id: 20,
    question: "Түлкү:куу",
    options: ["а) Дельфин:акылдуу", "б) Кумурска:эмгекчил", "в) Пил:чоң", "г) Чычкан:шамдагай"],
    answer: "б) Кумурска:эмгекчил"
  },
  {
    id: 21,
    question: "Пайдасыз:ыргытуу",
    options: ["а) Белгисиз:издебөө", "б) Керектүү:колдонуу", "в) Иретсиз:чачуу", "г) Белгилүү:тактоо"],
    answer: "б) Керектүү:колдонуу"
  },
  {
    id: 22,
    question: "Лыжачы:лыжа",
    options: ["а) Штангист:гантель", "б) Волейболчу:торчо", "в) Сүзүүчү:суу", "г) Футболчу:топ"],
    answer: "г) Футболчу:топ"
  },
  {
    id: 23,
    question: "Фонетика:тыбыш",
    options: ["а) Фразеологизм:сөз айкашы", "б) Макал:сөз", "в) Текст:сүйлөм", "г) Пунктуация:тыныш белги"],
    answer: "г) Пунктуация:тыныш белги"
  },
  {
    id: 24,
    question: "Сабак:класс",
    options: ["а) Буудай:кампа", "б) Концерт:театр", "в) Соода:базар", "г) Оомат:хан сарай"],
    answer: "в) Соода:базар"
  },
  {
    id: 25,
    question: "Үч бурчтук:фигура",
    options: ["а) Мебель:жыгач", "б) Китеп:кагаз", "в) Бугу:уруу", "г) Өсүмдүк:биология"],
    answer: "в) Бугу:уруу"
  },
  {
    id: 26,
    question: "Тоюу:тамактануу",
    options: ["а) Чарчоо:чуркоо", "б) Айруу:кесүү", "в) Жутуу:чайноо", "г) Сынуу:тебүү"],
    answer: "а) Чарчоо:чуркоо"
  },
  {
    id: 27,
    question: "Кежир:тил албас",
    options: ["а) Жоош:момун", "б) Урушчаак:сабырдуу", "в) Жалганчы:бетпак", "г) Элпек:шамдагай"],
    answer: "г) Элпек:шамдагай"
  },
  {
    id: 28,
    question: "Музоо:торпок",
    options: ["а) Тай:кунан", "б) Күчүк:тайган", "в) Такай:эшек", "г) Ымыркай:өспүрүм"],
    answer: "а) Тай:кунан"
  },
  {
    id: 29,
    question: "Дарыя:Нил",
    options: ["а) Тоо:Эверест", "б) Жаныбар:кит", "в) Имарат:Бурдж-Халифа", "г) Океан:Инд"],
    answer: "а) Тоо:Эверест"
  },
  {
    id: 30,
    question: "Ысык:жай",
    options: ["а) Суук:жай", "б) Түшүмдүү:күз", "в) Ызгардуу:кыш", "г) Салкын:жаз"],
    answer: "г) Салкын:жаз"
  }
];

function KyrgyzTest() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 минут

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  // Таймер
  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [finished]);

  const handleAnswer = (option) => {
    const newSelected = [...selectedAnswers];
    newSelected[current] = option;
    setSelectedAnswers(newSelected);

    const isCorrect = option === questions[current].answer;
    if (isCorrect) setScore(score + 1);

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setFinished(true);
    localStorage.setItem("kyrgyz_score", score);
  };

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold mb-4">Тест завершён ✅</h2>
        <p className="text-lg">Ты набрал {score} из {questions.length} баллов</p>
        <p>Остаток времени: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="testWindow">
      <h3 className="testCount">Вопрос {current + 1} из {questions.length}</h3>
      <p>Осталось времени: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
      <p className="testQuestion">{q.question}</p>
      <div className="answersAnalog">
        {q.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              backgroundColor: selectedAnswers[current] === option ? "#555" : "#eee",
              color: selectedAnswers[current] === option ? "#fff" : "#000"
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default KyrgyzTest;