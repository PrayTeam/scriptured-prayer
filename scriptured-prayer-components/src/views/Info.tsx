import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Deck } from "~/components";
import { DemoPrayerDeck } from "~/types";
import { useDemoPrayerDecks } from "~/hooks";
import forest from "~/assets/images/forest.jpg";
import NavigationMenu from "~/components/NavigationBar";

export function Info() {
  const navigate = useNavigate();
  const demoPrayerDecks = useDemoPrayerDecks();
  const [prayerDecks, setPrayerDecks] = useState<DemoPrayerDeck[][]>([]);

  useEffect(() => {
    (async () => {
      demoPrayerDecks
        .then((decks) => {
          setPrayerDecks(decks);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <>
      <NavigationMenu></NavigationMenu>
      <div
        style={{ backgroundImage: `url('${forest}')` }}
        className="w-full bg-no-repeat bg-center bg-cover"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row uppercase text-white font-bold p-8 md:text-xl lg:text-2xl text-center tracking-widest">
            <div className="md:mr-2">Guided.</div>
            <div className="md:mr-2">Consistent.</div>
            <div className="md:mr-2">Focused.</div>
          </div>
          <div className="pt-48 pb-64 px-8 text-white text-center">
            <h1 className="uppercase font-bold text-5xl md:text-6xl lg:text-8xl mb-4">
              Scriptured Prayer
            </h1>
            <p className="text-2xl font-semibold">
              A tool to help maximize your prayer life.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-snowgrass">
        <div className="px-6 py-8 md:py-16 md:space-x-12 max-w-screen-xl mx-auto">
          <div className="max-w-[800px]">
            <div className="mb-8">
              <h2 className="uppercase font-bold text-4xl">Know Him better.</h2>
              <p className="my-4 text-xl">
                God invites us to know Him. He reveals His character through His
                glorious works and the inspired Word. Scriptured Prayer directs
                your thoughts to God's attributes, allowing you to grow in
                knowledge of the Father.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="uppercase font-bold text-4xl">Trust Him more.</h2>
              <p className="my-4 text-xl">
                Trust isn't automatic. It's a process. Just like we have to earn
                the trust of others, we have to learn how to trust in God. Daily
                prayer focused on God's Word helps prepare us for the storms of
                life. When trials come, we fall back on our habits. Make praise
                a habit through Scriptured prayer.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="uppercase font-bold text-4xl">Pray His words.</h2>
              <p className="my-4 text-xl">
                Did you know there are 650 recorded prayers in the Bible? Why
                wouldn't we pray the words found in God's Holy Word? Connecting
                our prayers to Scripture grounds us in truth and enriches our
                Bible study, which in turn enriches our prayer life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-olive">
        <div className="px-6 py-8 md:py-16 md:space-x-12 max-w-screen-xl mx-auto">
          <h2 className="text-white text-center uppercase font-bold text-4xl mb-6">
            How to use Scriptured Prayer
          </h2>
          <div className="py-6">
            <video className="h-full w-full rounded-lg" controls>
              <source src="" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="bg-lichen">
        {prayerDecks.map((row, i) => (
          <div
            key={i}
            className="px-6 pt-8  md:space-x-12 max-w-screen-xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row w-full lg:space-x-12 justify-center">
              {row.map(({ id, ...c }, j) => (
                <Deck
                  key={j}
                  {...c}
                  scaleOnHover
                  onClick={() => navigate(`/prayer-decks/${id}`)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
