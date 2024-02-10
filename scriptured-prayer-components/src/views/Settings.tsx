import { useNavigate } from "react-router-dom";

import { Container } from "~/components";
import { LeftArrowIcon } from "~/components/Icons";
import { Button } from "~/components/form";
import { useApi, useProfile } from "~/hooks";

export function Settings() {
  const api = useApi();
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();

  const logout = async () => {
    api
      .logout()
      .then(() => {
        setProfile({ ...profile, authenticated: false });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-night h-full">
      <Container>
        <div className="flex gap-4 items-center mb-4">
          <LeftArrowIcon
            className="cursor-pointer"
            onClick={() => navigate("/home")}
            color="#fff"
          />
          <h1 className="text-2xl text-white">Settings</h1>
        </div>
        <div className="flex justify-center md:justify-normal w-full">
          <div className="flex-1 md:max-w-[200px]">
            <Button onClick={logout}>Logout</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
