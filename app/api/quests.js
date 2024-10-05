// app/api/quests.js

import chatMockData from "./chatMockData.json";

// Заглушка API, которая возвращает квесты
export async function fetchQuests() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "The Lost Treasure",
          description: "Find the hidden treasure in the ancient ruins.🧙‍♂️",
          difficulty: "Hard",
        },
        {
          id: 2,
          title: "Rescue the Princess",
          description: "Save the princess from the dragon.🧝‍♀️",
          difficulty: "Medium",
        },
        {
          id: 3,
          title: "Defeat the Goblin King",
          description: "Conquer the Goblin King and his minions.🧟‍♂️",
          difficulty: "Easy",
        },
      ]);
    }, 2000); // Имитация задержки в 1 секунду
  });
}
