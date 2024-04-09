import Cookies from "js-cookie";

import { Profile } from "~/types";
import {
  CardsRequest,
  LoginRequest,
  UserCardsRequest,
} from "~/api/models/requests";
import {
  UserCardResponse,
  LogoutResponse,
  UserResponse,
  CategoryResponse,
  CardResponse,
} from "~/api/models/responses";

const profile: Profile = JSON.parse(localStorage.getItem("profile")!);
const language = profile ? profile.language : "en";
const apiUrl = `${import.meta.env.VITE_PRAYERAPP_API}/${language}/api/`;

// generic request function
async function req<T>(url: RequestInfo, options: RequestInit): Promise<T> {
  const res = await fetch(`${apiUrl}${url}`, options);
  // if not within 2xx range
  if (!res.ok) throw res.status;
  else {
    // since json is quite a common response type, let's determine that quickly:
    const json = res.headers.get("content-type")?.includes("application/json");
    if (json) return (await res.json()) as T;
    return Promise.resolve(res.body as T);
  }
}

// http verbs
function post<T>(url: RequestInfo, options?: RequestInit) {
  return req<T>(url, { ...options, method: "POST" });
}

function get<T>(url: RequestInfo, options?: RequestInit) {
  return req<T>(url, { ...options, method: "GET" });
}

function toJson<T>(options: RequestInit, payload: T) {
  return {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(payload),
  };
}

function withCsrf(options: RequestInit) {
  return {
    ...options,
    headers: {
      ...options.headers,
      "X-CSRFToken": Cookies.get("csrftoken")!,
    },
  };
}

// todo: grab from open api schema
export const controllers = {
  auth: "auth",
  cards: "cards",
  categories: "categories",
  userCards: "usercards",
};

// eslint-disable-next-line
const parameterizeRequest = (url: string, request?: Record<string, any>) =>
  `${url}?${(request
    ? Object.entries(request).map((e) => `${e[0]}=${e[1]}`)
    : []
  ).join("&")}`;

export function useApi() {
  const options: RequestInit = {
    headers: {},
    credentials: "include",
  };

  return {
    auth: {
      login: (loginRequest: LoginRequest) =>
        post("auth/login/", toJson(options, loginRequest)),
      getUser: () => get<UserResponse>("auth/user/", options),
      logout: () => post<LogoutResponse>("auth/logout/", withCsrf(options)),
    },
    cards: {
      all: (cardsRequest?: CardsRequest) =>
        get<CardResponse[]>(
          parameterizeRequest("cards/", cardsRequest),
          options,
        ),
    },
    categories: {
      all: () => get<CategoryResponse[]>("categories/", options),
    },
    userCards: {
      all: (userCardsRequest?: UserCardsRequest) =>
        get<UserCardResponse[]>(
          parameterizeRequest("usercards/", userCardsRequest),
          options,
        ),
      logCard: (pk: number) => post(`usercards/?pk=${pk}`),
    },
  };
}
