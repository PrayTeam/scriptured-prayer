import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "~/assets/logo.svg";
import { useApi, useProfile } from "~/hooks";
import { Button, Input } from "~/components/form";

export function Login() {
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi();
  const [error, setError] = useState<string>();

  // already logged in, navigate back to home
  useEffect(() => {
    if (profile.authenticated) navigate("/dashboard");
  }, [profile]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    (async () => {
      api.auth
        .login({
          username,
          password,
        })
        .then(() => {
          api.auth.getUser().then((user) => {
            setProfile({
              ...profile,
              ...{
                authenticated: true,
                id: user.pk,
                email: user.email,
                username: user.username,
                firstName: user.first_name,
                lastName: user.last_name,
              },
            });
          });
        })
        .catch((error) => {
          switch (error) {
            case 400:
              setError("Invalid login");
              break;
            default:
              setError("An unknown error occurred");
              break;
          }
        });
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red mb-4">{error}</div>}
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}
