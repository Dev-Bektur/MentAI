// server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Путь к файлу где хранятся ответы
const DB_PATH = "./answers.json";

// Если файла нет – создаём
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify([]));
}

// 📌 API: сохранить ответ
app.post("/api/answers", (req, res) => {
  const { userId, questionId, answer } = req.body;

  if (!userId || !questionId || !answer) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));

  const newAnswer = {
    id: Date.now(),
    userId,
    questionId,
    answer,
    date: new Date().toISOString()
  };

  data.push(newAnswer);

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.json({ message: "Answer saved!", answer: newAnswer });
});

// 📌 API: получить все ответы
app.get("/api/answers", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
  res.json(data);
});

// 📌 API: получить ответы конкретного пользователя
app.get("/api/answers/user/:userId", (req, res) => {
  const { userId } = req.params;
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));

  const filtered = data.filter(item => item.userId == userId);

  res.json(filtered);
});

// Старт сервера
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
