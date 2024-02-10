import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProfilePicture } from "~/components/ProfilePicture";
import { useProfile } from "~/hooks";
import forest from "~/assets/images/forest.png";
import { Container } from "~/components";

interface PrayerDeckInfoProps {
  name: string;
}

function PrayerDeckInfo(props: PrayerDeckInfoProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/prayer-decks")}
      className="flex-[0_0_auto] w-[250px] h-[250px] md:w-[350px] md:h-[350px] mb-4 bg-no-repeat bg-center bg-cover rounded relative overflow-clip cursor-pointer"
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
  const navigate = useNavigate();
  const { profile } = useProfile();
  // todo
  const [prayerDecks] = useState([
    { title: "Names of God" },
    { title: "Names of Jesus" },
    { title: "Names of the Holy Spirit" },
  ]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple from-10% via-purple via-30% to-blue to-90%">
      <Container>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl text-white">
              Welcome, {profile.username}!
            </h1>
            <ProfilePicture onClick={() => navigate("/settings")} />
          </div>
          <div>
            <h2 className="text-xl uppercase text-white font-semibold mb-4">
              Prayer Decks
            </h2>
            <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-x-4 -mx-6 md:mx-0 px-6 md:px-0">
              {prayerDecks.map((deck, i) => (
                <PrayerDeckInfo key={i} name={deck.title} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
