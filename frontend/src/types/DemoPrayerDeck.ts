import { theme } from "~/tailwind.config";

export interface DemoPrayerDeck {
  title: string;
  description: string;
  image: string;
  color: keyof typeof theme.colors;
  id: number;
}
