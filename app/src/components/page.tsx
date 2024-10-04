import React from "react";
import { Sword, Shield, Heart, Zap, Send } from "lucide-react";

// Мокап данных Redux
const initialState = {
  messages: [
    { id: 1, sender: "System", content: "Добро пожаловать в мир Эльдории!" },
    { id: 2, sender: "Герой", content: "Я готов к приключениям!" },
  ],
  resources: {
    health: 100,
    mana: 50,
    experience: 0,
  },
};

export default function RPGLandingPage() {
  const [state, setState] = React.useState(initialState);
  const [inputMessage, setInputMessage] = React.useState("");

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setState((prevState) => ({
        ...prevState,
        messages: [
          ...prevState.messages,
          {
            id: prevState.messages.length + 1,
            sender: "Герой",
            content: inputMessage,
          },
        ],
      }));
      setInputMessage("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Шапка */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Эльдория: Мир Приключений</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Об игре
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Регистрация
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Погрузись в мир Эльдории
          </h2>

          {/* RPG Чат компонент */}
          <div className="bg-gray-200 rounded-lg p-4 mb-6">
            <div className="bg-white rounded-lg p-4 h-80 overflow-y-auto mb-4">
              {state.messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-2 ${message.sender === "Герой" ? "text-right" : "text-left"}`}
                >
                  <span className="inline-block bg-gray-300 rounded-lg px-3 py-2">
                    <strong>{message.sender}:</strong> {message.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow mr-2 p-2 rounded-lg border border-gray-300"
                placeholder="Введите сообщение..."
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                <Send size={24} />
              </button>
            </div>
          </div>

          {/* Полоска ресурсов */}
          <div className="bg-gray-800 text-white p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Heart className="mr-2 text-red-500" />
                <div className="w-32 bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-red-500 rounded-full h-4"
                    style={{ width: `${state.resources.health}%` }}
                  ></div>
                </div>
                <span className="ml-2">{state.resources.health}/100</span>
              </div>
              <div className="flex items-center">
                <Zap className="mr-2 text-blue-500" />
                <div className="w-32 bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-blue-500 rounded-full h-4"
                    style={{ width: `${state.resources.mana * 2}%` }}
                  ></div>
                </div>
                <span className="ml-2">{state.resources.mana}/50</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Опыт:</span>
              <div className="flex-grow bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-500 rounded-full h-4"
                  style={{ width: `${state.resources.experience}%` }}
                ></div>
              </div>
              <span className="ml-2">{state.resources.experience}/100</span>
            </div>
          </div>

          {/* Игровые иконки и элементы управления */}
          <div className="flex justify-center space-x-4 mb-6">
            <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600">
              <Sword size={24} />
            </button>
            <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600">
              <Shield size={24} />
            </button>
            <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600">
              <Heart size={24} />
            </button>
            <button className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600">
              <Zap size={24} />
            </button>
          </div>

          {/* Дополнительный контент */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Последние новости</h3>
              <ul className="list-disc list-inside">
                <li>Новое подземелье "Пещеры Хаоса" теперь доступно!</li>
                <li>Ивент "Фестиваль Дракона" начнется через 3 дня</li>
                <li>Обновление баланса классов: улучшения для магов</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Топ игроков</h3>
              <ol className="list-decimal list-inside">
                <li>ДраконоборецЭпик - Уровень 99</li>
                <li>МагияИКосмос - Уровень 98</li>
                <li>ЛучникСудьбы - Уровень 97</li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Эльдория: Мир Приключений. Все права защищены.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-gray-300 mr-4">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-gray-300 mr-4">
              Условия использования
            </a>
            <a href="#" className="hover:text-gray-300">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
