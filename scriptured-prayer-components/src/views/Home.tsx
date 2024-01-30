import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProfilePicture } from "~/components/ProfilePicture";
import { useProfile } from "~/hooks";
import forest from "~/assets/forest.png";

interface PrayerDeckInfoProps {
  name: string;
}

function PrayerDeckInfo(props: PrayerDeckInfoProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/prayer-decks")}
      className="flex-[0_0_auto] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-no-repeat bg-center bg-cover rounded relative overflow-clip cursor-pointer"
      style={{ backgroundImage: `url('${forest}')` }}
    >
      <div className="absolute w-full h-full bg-gradient-to-br from-indigo from-10% via-sky via-30% to-emerald to-90% opacity-50"></div>
      <div className="text-white text-3xl font-bold relative z-10 p-6">
        {props.name}
      </div>
    </div>
  );
}

export function Home() {
  const { profile } = useProfile();
  // todo
  const [prayerDecks] = useState([
    { title: "My First Prayer Deck" },
    { title: "Seasonal Prayer Deck" },
    { title: "Prayer Deck #3" },
  ]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple from-10% via-purple via-30% to-blue to-90%">
      <div className="px-6 py-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl text-white">
              Welcome, {profile.username}!
            </h1>
            <ProfilePicture />
          </div>
          <div>
            <h2 className="text-xl uppercase text-white font-semibold mb-4">
              Prayer Decks
            </h2>
            <div className="flex flex-nowrap overflow-x-auto space-x-4 -mx-6 px-6 scrollbar-none">
              {prayerDecks.map((deck, i) => (
                <PrayerDeckInfo key={i} name={deck.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
