import { CategoryGenre } from "~/types";

export interface UserCardsRequest {
  card__category__id?: number;
  card__category__genre?: keyof typeof CategoryGenre;
  card__category__name?: string;
  limit?: number;
}
