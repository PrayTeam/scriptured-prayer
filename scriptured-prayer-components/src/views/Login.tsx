import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "~/assets/logo.svg";
import { useApi, useProfile } from "~/hooks";
import { Button, Input } from "~/components/form";

export function Login() {
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi();
  const [csrfToken, setCsrfToken] = useState<string | undefined>(
    Cookies.get("csrftoken"),
  );

  // already logged in, navigate back to home
  useEffect(() => {
    if (profile.authenticated) navigate("/home");
  }, [profile]);

  useEffect(() => {
    if (!csrfToken) {
      (async () => {
        api
          .csrf()
          .then(() => setCsrfToken(Cookies.get("csrftoken") ?? ""))
          .catch((error) => console.error(error));
      })();
    }
  }, []);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    (async () => {
      api
        .login({
          username,
          password,
        })
        .then((user) => {
          setProfile({
            ...profile,
            ...{
              authenticated: true,
              id: user.id,
              email: user.email,
              username: user.username,
              active: user.is_active,
              staff: user.is_staff,
              superuser: user.is_superuser,
              joined: user.date_joined,
              login: user.last_login,
              firstName: user.first_name,
              lastName: user.last_name,
              permissions: user.user_permissions,
              groups: user.groups,
            },
          });
        })
        .catch((error) => console.error(error));
    })();
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo from-10% via-sky via-30% to-emerald to-90%">
      <div className="flex flex-col justify-center items-center h-full px-6 py-6 max-w-[350px] mx-auto">
        <img src={logo} className="max-h-[200px] mb-12" />
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}
