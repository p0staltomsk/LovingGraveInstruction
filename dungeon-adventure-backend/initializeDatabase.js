const mongoose = require('mongoose');
const chatMockData = {
  "messages": [
    {
      "id": 1,
      "sender": {
        "name": "Merlin",
        "avatar": "🧙‍♂️",
        "avatarBg": "#55efc4"
      },
      "content": "Greetings, adventurers! I have a quest for you.",
      "timestamp": "10:45 PM",
      "actions": [
        { "text": "Accept", "color": "#55efc4" },
        { "text": "Decline", "color": "#b2bec3" }
      ]
    },
    {
      "id": 2,
      "sender": {
        "name": "Elara",
        "avatar": "🧝‍♀️",
        "avatarBg": "#fdcb6e"
      },
      "content": "I will join you, Merlin. What is the quest?",
      "timestamp": "10:47 PM",
      "actions": [
        { "text": "Explore", "color": "#fdcb6e" }
      ]
    },
    {
      "id": 3,
      "sender": {
        "name": "Grok",
        "avatar": "🧟‍♂️",
        "avatarBg": "#ff7675"
      },
      "content": "I will crush any foes that stand in our way!",
      "timestamp": "10:50 PM",
      "actions": [
        { "text": "Smash", "color": "#ff7675" }
      ]
    },
    {
      "id": 4,
      "sender": {
        "name": "Zara",
        "avatar": "🧙‍♀️",
        "avatarBg": "#a29bfe"
      },
      "content": "I will provide magical support. Let us begin!",
      "timestamp": "10:52 PM",
      "actions": [
        { "text": "Cast Spell", "color": "#a29bfe" }
      ]
    },
    {
      "id": 5,
      "sender": {
        "name": "Merlin",
        "avatar": "🧙‍♂️",
        "avatarBg": "#55efc4"
      },
      "content": "Excellent, let us venture forth and vanquish the evil that plagues these lands!",
      "timestamp": "10:55 PM",
      "actions": [
        { "text": "Lead the Way", "color": "#55efc4" }
      ]
    }
  ]
};
require('dotenv').config();

const MessageSchema = new mongoose.Schema({
  sender: {
    name: String,
    avatar: String,
    avatarBg: String
  },
  content: String,
  timestamp: String,
  actions: [{
    text: String,
    color: String
  }]
});

const Message = mongoose.model('Message', MessageSchema);

async function initializeDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Очистка существующей коллекции
    await Message.deleteMany({});
    console.log("Existing messages cleared");

    // Вставка мок данных
    const result = await Message.insertMany(chatMockData.messages);
    console.log(`${result.length} messages inserted`);

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

initializeDatabase();