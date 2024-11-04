type DailyDeckConfigType = "card" | "other";

export interface DailyDeckConfig {
  id: number; // -1 for custom
  type: DailyDeckConfigType; // e.g "card"
  data?: string; // for custom cards
}

export interface DailyDeckResponse {
  id: number;
  user: number;
  config: DailyDeckConfig[];
}
