import { CategoryGenre } from "~/types";

export interface CardsRequest {
  category__genre?: keyof typeof CategoryGenre;
  exclude_category__genre?: keyof typeof CategoryGenre;
  category__id?: number;
  include_end_utility_cards?: boolean;
  limit?: number;
  search?: string;
}
