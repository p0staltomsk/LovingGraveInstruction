import { useEffect, useState, useRef } from "react";
import QuestList from "./QuestList";
import { Story } from "./story";
import { fetchQuests } from "../../api/quests";
import { fetchMessages, saveMessage } from "../../api/messages";

export default function RPGLandingPage2() {
  const [quests, setQuests] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    async function loadData() {
      const [questsData, messagesData] = await Promise.all([
        fetchQuests(),
        fetchMessages()
      ]);
      setQuests(questsData);
      setMessages(messagesData);
    }
    loadData();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const userMessage = {
      sender: {
        name: "You",
        avatar: "👤",
        avatarBg: "#74b9ff"
      },
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: []
    };

    try {
      const savedMessage = await saveMessage(userMessage);
      setMessages([...messages, savedMessage]);
      setNewMessage("");
    } catch (error) {
      console.error("Failed to save message:", error);
    }
  };

  return (
    <div className="bg-[#1a1a1a] text-white">
      <header className="bg-[#2b2b2b] py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="text-xl font-bold">
              Dungeon Adventure
            </a>
            <div className="flex items-center gap-6 md:hidden">
              <a href="#" className="text-sm hover:text-[#55efc4]">
                About
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Features
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Contact
              </a>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm hover:text-[#55efc4]">
                About
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Features
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Contact
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm border border-[#55efc4] text-[#55efc4] px-4 py-2 rounded-md hover:bg-[#55efc4] hover:text-[#1a1a1a]">
              Sign In
            </button>
            <button className="text-sm bg-[#55efc4] text-[#1a1a1a] px-4 py-2 rounded-md hover:bg-[#3eaf8c]">
              Sign Up
            </button>
          </div>
        </div>        
      </header>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Embark on an Epic Adventure
              </h1>
              <p className="text-lg text-[#b2bec3]">
                Explore a vast and mysterious world, battle fearsome foes, and
                uncover the secrets of the Dungeon.
              </p>
              <div className="flex items-center gap-4">
                <button className="text-sm bg-[#55efc4] text-[#1a1a1a] px-4 py-2 rounded-md hover:bg-[#3eaf8c]">
                  Play Now
                </button>
                <button className="text-sm border border-[#55efc4] text-[#55efc4] px-4 py-2 rounded-md hover:bg-[#55efc4] hover:text-[#1a1a1a]">
                  Learn More
                </button>
              </div>              
              <Story />
            </div>            
            <div className="bg-[#1e1e1e] text-white rounded-xl overflow-hidden w-full">
              <div className="flex items-center justify-between bg-[#2b2b2b] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="bg-[#55efc4] rounded-full w-8 h-8 flex items-center justify-center text-2xl">
                    🗡️
                  </div>
                  <div className="font-bold">Dungeon Chat</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="bg-[#ffeaa7] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      🔋
                    </div>
                    <div>100</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-[#ff7675] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      ❤️
                    </div>
                    <div>50</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-[#a29bfe] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      💰
                    </div>
                    <div>1000</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-4 flex-grow overflow-y-auto h-[400px]">
                {messages.map((message) => (
                  <div key={message._id} className="flex items-start gap-4">
                    <div className={`rounded-full w-12 h-12 flex items-center justify-center text-3xl`} style={{ backgroundColor: message.sender.avatarBg }}>
                      {message.sender.avatar}
                    </div>
                    <div className="grid gap-1 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="font-bold">{message.sender.name}</div>
                        <div className="text-[#b2bec3]">{message.timestamp}</div>
                      </div>
                      <div>
                        <p>{message.content}</p>
                      </div>
                      {message.actions && message.actions.length > 0 && (
                        <div className="flex items-center gap-2">
                          {message.actions.map((action, index) => (
                            <button
                              key={index}
                              className="text-sm font-bold px-2 py-1 rounded-full"
                              style={{ backgroundColor: action.color, color: '#1e1e1e' }}
                            >
                              {action.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="bg-[#2b2b2b] px-4 py-3 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="bg-[#1e1e1e] border-none rounded-full px-4 py-2 flex-1 text-sm"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit" className="text-sm bg-[#55efc4] text-[#1e1e1e] rounded-full px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>             
            </div>

            <h2 className="text-3xl font-bold">Available Quests:</h2>
            <QuestList quests={quests} />
          </div>
        </div>        
      </section>
      <footer className="bg-[#2b2b2b] py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-xl font-bold">
              Dungeon Adventure
            </a>
            <div className="flex items-center gap-6 md:hidden">
              <a href="#" className="text-sm hover:text-[#55efc4]">
                About
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Features
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Contact
              </a>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm hover:text-[#55efc4]">
                About
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Features
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-[#b2bec3]">
              &copy; 2024 Dungeon Adventure. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-[#55efc4]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}