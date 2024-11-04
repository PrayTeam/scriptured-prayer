interface ScriptureText {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface UserCardResponse {
  answered: boolean;
  category: string;
  category_id: number;
  copyright_notice: string;
  description: string;
  genre: string;
  hidden: boolean;
  id: number;
  in_prayer_deck: boolean;
  instruction: string;
  scripture: string;
  scripture_text: ScriptureText[];
  title: string;
  usercardnote_set: string[];
  version: string;
}
