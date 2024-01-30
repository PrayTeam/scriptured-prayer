export interface Profile {
  authenticated: boolean;
  language: string;
  darkMode: boolean;
  id: number;
  email: string;
  username: string;
  active: boolean;
  staff: boolean;
  superuser: boolean;
  joined: Date;
  login: Date;
  firstName: string;
  lastName: string;
  permissions: [];
  groups: [];
}
