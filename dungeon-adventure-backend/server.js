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

// Определение схемы и модели сообщения
const MessageSchema = new mongoose.Schema({
  sender: {
    name: String,
    avatar: String,
    avatarBg: String
  },
  content: String,
  timestamp: Date,
  actions: [{
    text: String,
    color: String
  }]
});

const Message = mongoose.model('Message', MessageSchema);

// API для получения всех сообщений
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API для сохранения нового сообщения
app.post('/api/messages', async (req, res) => {
  const message = new Message(req.body);
  try {
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// grog

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