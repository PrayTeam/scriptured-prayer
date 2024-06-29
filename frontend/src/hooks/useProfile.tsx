import { createContext, useContext } from "react";
import { Profile } from "~/types";

interface ProfileContextType {
  profile: Profile;
  setProfile: (value: Profile) => void;
}

export const ProfileContext = createContext<ProfileContextType>(undefined!);

export function useProfile() {
  const profileContext = useContext(ProfileContext);
  if (!profileContext) {
    console.error("ProfileContext must be used within ProfileContext.Provider");
  }

  return profileContext;
}
