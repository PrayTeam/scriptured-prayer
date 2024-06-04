interface ScriptureText {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface UserCardResponse {
  id: number;
  title: string;
  scripture: string;
  version: string;
  scripture_text: ScriptureText[];
  descriptions: string;
  copyright_notice: string;
  category: string;
  genre: string;
  usercardnote_set: [];
  answered: boolean;
  hidden: boolean;
  in_prayer_deck: boolean;
  last_prayed: Date | null;
}
