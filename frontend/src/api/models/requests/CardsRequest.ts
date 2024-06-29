import { CategoryGenre } from "~/types";

export interface CardsRequest {
  category__genre?: keyof typeof CategoryGenre;
  category__id?: number;
  limit?: number;
}
