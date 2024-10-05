import  { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const API_KEY = "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";

async function askGroq(prompt: any, model="llama3-8b-8192") {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: model,
        max_tokens: 120,
        messages: [{ role: "user", content: prompt }]
      })
    });
    if (!response.ok) 
      throw new Error(`HTTP error! status: ${response.status}`);    
    const data = await response.json();
    return data.choices[0]?.message?.content || "No response";
  } catch (error) {
    console.error("Error executing Groq request:", error);
    return "An error occurred while executing the request";
  }
}

export function Story() {
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateNewStory = async () => {
    setIsLoading(true);
    const prompt = "Generate begin of Story with a beginning, middle, and end. The story should be creative and engaging.";
    const newStory = await askGroq(prompt);
    setStory(newStory);
    setIsLoading(false);
  };

  useEffect(() => {
    generateNewStory();
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
          <p className="text-sm leading-relaxed">
            {isLoading ? "Generating a new story..." : story + '...'}
          </p>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={generateNewStory} disabled={isLoading}>
            <RefreshCwIcon className="mr-2 h-4 w-4" />
            New Story
          </Button>
          <Button onClick={saveStory} disabled={isLoading}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Save Story
          </Button>
        </div>
      </div>
    </div>
  )
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}

function SaveIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  )
}