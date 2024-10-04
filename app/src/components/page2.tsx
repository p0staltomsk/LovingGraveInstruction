// page2.tsx

import { useEffect, useState } from "react";
import QuestList from "./QuestList"; // Импортируем компонент QuestList
import { fetchQuests } from "../../api/quests.js"; // Импорт функции получения квестов

export default function RPGLandingPage2() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    async function loadQuests() {
      const data = await fetchQuests();
      setQuests(data);
    }

    loadQuests();
  }, []);

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
              <div className="p-4 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#55efc4] rounded-full w-12 h-12 flex items-center justify-center text-3xl">
                    🧙‍♂️
                  </div>
                  <div className="grid gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="font-bold">Merlin</div>
                      <div className="text-[#b2bec3]">10:45 PM</div>
                    </div>
                    <div>
                      <p>Greetings, adventurers! I have a quest for you.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-sm bg-[#55efc4] text-[#1e1e1e] font-bold px-2 py-1 rounded-full">
                        Accept
                      </button>
                      <button className="text-sm bg-[#b2bec3] text-[#1e1e1e] font-bold px-2 py-1 rounded-full">
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#fdcb6e] rounded-full w-12 h-12 flex items-center justify-center text-3xl">
                    🧝‍♀️
                  </div>
                  <div className="grid gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="font-bold">Elara</div>
                      <div className="text-[#b2bec3]">10:47 PM</div>
                    </div>
                    <div>
                      <p>I will join you, Merlin. What is the quest?</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-sm bg-[#fdcb6e] text-[#1e1e1e] font-bold px-2 py-1 rounded-full">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#ff7675] rounded-full w-12 h-12 flex items-center justify-center text-3xl">
                    🧟‍♂️
                  </div>
                  <div className="grid gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="font-bold">Grok</div>
                      <div className="text-[#b2bec3]">10:50 PM</div>
                    </div>
                    <div>
                      <p>I will crush any foes that stand in our way!</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-sm bg-[#ff7675] text-[#1e1e1e] font-bold px-2 py-1 rounded-full">
                        Smash
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#a29bfe] rounded-full w-12 h-12 flex items-center justify-center text-3xl">
                    🧙‍♀️
                  </div>
                  <div className="grid gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="font-bold">Zara</div>
                      <div className="text-[#b2bec3]">10:52 PM</div>
                    </div>
                    <div>
                      <p>I will provide magical support. Let us begin!</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-sm bg-[#a29bfe] text-[#1e1e1e] font-bold px-2 py-1 rounded-full">
                        Cast Spell
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#55efc4] rounded-full w-12 h-12 flex items-center justify-center text-3xl">
                    🧙‍♂️
                  </div>
                  <div className="grid gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="font-bold">Merlin</div>
                      <div className="text-[#b2bec3]">10:55 PM</div>
                    </div>
                    <div>
                      <p>
                        Excellent, let us venture forth and vanquish the evil
                        that plagues these lands!
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-sm bg-[#55efc4] text-[#1e1e1e] font-bold px-2 py-1 rounded-full">
                        Lead the Way
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#2b2b2b] px-4 py-3 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="bg-[#1e1e1e] border-none rounded-full px-4 py-2 flex-1 text-sm"
                />
                <button className="text-sm bg-[#55efc4] text-[#1e1e1e] rounded-full px-3 py-2">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Available Quests</h2>
          <QuestList quests={quests} /> {/* Используем компонент QuestList */}
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
