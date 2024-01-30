export interface LoginResponse {
  id: number;
  email: string;
  username: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  date_joined: Date;
  last_login: Date;
  first_name: string;
  last_name: string;
  user_permissions: [];
  groups: [];
}
