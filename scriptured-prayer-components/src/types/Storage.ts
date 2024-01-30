import { Profile } from "./Profile";

export interface LocalStorage {
  profile: Profile;
}

export const localStorageDefaults: LocalStorage = {
  profile: {
    authenticated: false,
    language: "en",
    darkMode: false,
    id: -1,
    email: "",
    username: "",
    active: false,
    staff: false,
    superuser: false,
    joined: new Date(),
    login: new Date(),
    firstName: "",
    lastName: "",
    permissions: [],
    groups: [],
  },
};
