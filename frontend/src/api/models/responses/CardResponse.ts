interface ScriptureText {
  book: string;
  chapter: number;
  text: string;
  verse: number;
}

export interface CardResponse {
  id: number;
  title: string;
  scripture: string;
  version: string;
  scripture_text: ScriptureText[];
  description: string;
  copyright_notice: string;
  category: string;
  genre: string;
  instruction: string;
}
