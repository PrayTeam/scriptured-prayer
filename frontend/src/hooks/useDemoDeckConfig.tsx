import { DailyDeckConfig } from "~/api/models/responses";

const demoDeckConfig: DailyDeckConfig[] = [
  { id: 520, type: "card" },
  { id: 547, type: "card" },
  { id: 563, type: "card" },
  { id: 581, type: "card" },
  { id: 598, type: "card" },
  { id: 611, type: "card" },
  { id: 616, type: "card" },
  { id: 645, type: "card" },
  { id: 650, type: "card" },
  { id: 668, type: "card" },
];

// todo
export async function useDemoDeckConfig(): Promise<DailyDeckConfig[]> {
  return Promise.resolve(demoDeckConfig);
}
