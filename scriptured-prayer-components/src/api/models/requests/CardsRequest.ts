import { CategoryGenre, CategoryName } from "~/types";

export interface CardsRequest {
  category__genre?: keyof typeof CategoryGenre;
  category__name?: CategoryName;
  limit?: number;
}
