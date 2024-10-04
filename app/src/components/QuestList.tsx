// QuestList.tsx

import React, { useEffect, useState } from "react";
import { fetchQuests } from "../../api/quests.js";

const QuestList = () => {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Вызываем API-заглушку для получения данных о квестах
    const loadQuests = async () => {
      try {
        const data = await fetchQuests();
        setQuests(data);
      } catch (err) {
        setError("Ошибка при загрузке данных");
      } finally {
        setLoading(false);
      }
    };

    loadQuests();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Список квестов</h1>
      <ul>
        {quests.map((quest) => (
          <li key={quest.id}>
            <h2>{quest.title}</h2>
            <p>{quest.description}</p>
            <p>Сложность: {quest.difficulty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestList;
