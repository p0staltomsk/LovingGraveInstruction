import React, { useEffect, useState } from "react";
import { fetchQuests } from "../../api/quests.js";
import { motion } from "framer-motion";

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
        {quests.map((quest, index) => (
          <motion.li
            key={quest.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <h2>{quest.title}</h2>
            <p>{quest.description}</p>
            <p>Сложность: {quest.difficulty}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default QuestList;
