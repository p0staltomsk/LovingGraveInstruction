import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { BotIcon, RefreshCwIcon, SaveIcon } from 'lucide-react';

async function askGroq(prompt: string, model: string = "llama3-70b-8192") {
  try {
    const response = await fetch("http://localhost:5000/api/groq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt, model })
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Ошибка HTTP! статус: ${response.status}, сообщение: ${errorData}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "Нет ответа";
  } catch (error) {
    console.error("Ошибка выполнения запроса Groq:", error);
    throw error;
  }
}

export function Story() {
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isInitialMount = useRef(true);

  const generateNewStory = async () => {     
    setIsLoading(true);
    setError(null);
    try {
      const prompt = "Generate a short fantasy story introduction. The story should be creative and engaging. Limit it to a nice paragraph of no more than 150 tokens for a text visual widget. A couple of character names, the name of the universe/era/literary or game style are welcome. But dont use exist popular names - create some new. (dont use names like: Elyria/Eldrador/Eldrida/Khaeridia/Lyra Flynn).";
      const newStory = await askGroq(prompt);
      setStory(newStory + '...');
    } catch (error: any) {
      console.error("Подробная ошибка:", error);
      setError(`Не удалось сгенерировать историю: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      generateNewStory();
    }
  }, []);

  const saveStory = () => {
    // Implement save functionality here
    console.log("Saving story:", story);
    // You could save to local storage, or send to a backend API
  };

  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-md flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
            <BotIcon className="w-5 h-5 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-bold text-center ml-2">AI Story Generator</h2>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          This AI-powered component generates a unique story in real-time. Click the buttons below to get a new story or
          save the current one.
        </p>
        <div className="bg-muted rounded-md p-4">
          {error ? (
            <p className="text-sm text-red-500">{error}</p>
          ) : (
            <p className="text-sm leading-relaxed">
              {isLoading ? "Generating a new story..." : story}
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={generateNewStory} disabled={isLoading}>
            <RefreshCwIcon className="mr-2 h-4 w-4" />
            New Story
          </Button>
          <Button onClick={saveStory} disabled={isLoading || !story}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Save Story
          </Button>
        </div>
      </div>
    </div>
  )
}