const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Подключено к MongoDB"))
  .catch(err => console.error("Ошибка подключения к MongoDB:", err));

app.post('/api/groq', async (req, res) => {
  const { prompt, model } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    console.error("GROQ_API_KEY не установлен в переменных окружения");
    return res.status(500).json({ error: "GROQ_API_KEY не установлен в переменных окружения" });
  }

  try {
    console.log("Отправка запроса к Groq API с промптом:", prompt);
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: model || "llama3-8b-8192",
        max_tokens: 120,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`Ошибка Groq API: статус ${response.status}, сообщение: ${errorData}`);
      throw new Error(`Ошибка HTTP! статус: ${response.status}, сообщение: ${errorData}`);
    }

    const data = await response.json();
    console.log("Получен ответ от Groq API:", data);
    res.json(data);
  } catch (error) {
    console.error("Подробная ошибка в запросе Groq:", error);
    res.status(500).json({ error: error.message || "Произошла ошибка при выполнении запроса" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});