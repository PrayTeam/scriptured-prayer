import { DailyDeckResponse } from "./DailyDeckResponse";
import { UserCardResponse } from "./UserCardResponse";

export interface DailyDeckDetailResponse extends DailyDeckResponse {
  cards: UserCardResponse[];
}
