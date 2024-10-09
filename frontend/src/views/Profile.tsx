import { useNavigate } from "react-router-dom";

import { Container } from "~/components";
import {
  LanguageIcon,
  LeftArrowIcon,
  LogoutIcon,
  NotificationIcon,
  PrivacyIcon,
} from "~/components/Icons";
import { useApi, useProfile } from "~/hooks";

interface OptionProps {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

function Option({ onClick, icon: Icon, label }: OptionProps) {
  return (
    <div onClick={onClick} className="flex mb-4 cursor-pointer">
      <Icon width="24" height="24" />
      <div className="ml-2">{label}</div>
    </div>
  );
}

export function Profile() {
  const api = useApi();
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();

  const logout = async () => {
    api.auth
      .logout()
      .then(() => {
        setProfile({ ...profile, authenticated: false });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <div className="flex gap-4 items-center mb-4">
        <LeftArrowIcon
          width="24"
          height="24"
          className="cursor-pointer"
          onClick={() => navigate("/dashboard")}
          color="#000"
        />
        <h1 className="text-2xl text-black font-black">Profile</h1>
      </div>
      <div className="flex flex-col">
        <Option
          onClick={() => {
            /*todo*/
          }}
          icon={LanguageIcon}
          label="Language"
        />
        <Option
          onClick={() => {
            /*todo*/
          }}
          icon={NotificationIcon}
          label="Notifications"
        />
        <Option
          onClick={() => navigate("/privacy")}
          icon={PrivacyIcon}
          label="Privacy Policy"
        />
        <Option onClick={logout} icon={LogoutIcon} label="Logout" />
      </div>
    </Container>
  );
}
