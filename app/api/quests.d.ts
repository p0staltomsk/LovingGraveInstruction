declare module '../../api/quests' {
    interface Quest {
      id: number;
      title: string;
      description: string;
      difficulty: string;
    }
  
    export function fetchQuests(): Promise<Quest[]>;
  }