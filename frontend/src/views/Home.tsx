import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Deck, Footer, Faq } from "~/components";
import { DemoPrayerDeck } from "~/types";
import { useDemoPrayerDecks } from "~/hooks";
import forest from "~/assets/images/forest.jpg";
import { Button } from "~/components/form";

export function Home() {
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
          <div className="pt-48 pb-64 text-white text-center">
            <h1 className="uppercase font-bold text-5xl md:text-6xl lg:text-8xl mb-4">
              Scriptured Prayer
            </h1>
            <p className="text-2xl font-semibold">
              A tool to help maximize your prayer life.
            </p>
            <Button
              className="bg-sky max-w-[200px] mt-6"
              onClick={() => navigate("/daily-deck")}
            >
              PRAY NOW
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-snowgrass">
        <div className="px-6 py-8 md:py-16 md:space-x-12 max-w-screen-xl mx-auto">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-8">
              <p className="text-md md:text-xl text-justify">
                Scriptured Prayer is a conversation with God. God speaks to you
                through the scriptures you are reading and you answer in 1 of 3
                ways:
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-between md:space-x-8">
              <div className="flex flex-col mb-8 text-center text-blue">
                <h2 className="uppercase font-bold text-4xl">Repeat</h2>
                <p className="my-4 text-md">
                  If the scripture is already in a prayer format, you can simply
                  repeat the scripture.
                </p>
              </div>
              <div className="flex flex-col mb-8 text-center text-blue">
                <h2 className="uppercase font-bold text-4xl">Reword</h2>
                <p className="my-4 text-md">
                  You only need to change a few words to turn this scripture
                  into a personalized prayer.
                </p>
              </div>
              <div className="flex flex-col mb-8 text-center text-blue">
                <h2 className="uppercase font-bold text-4xl">Respond</h2>
                <p className="my-4 text-md">
                  Give your heartfelt response to the scripture in praise,
                  thanks, confession or requests.
                </p>
              </div>
            </div>
            <div>
              <p className="text-md md:text-xl text-justify">
                Never again will you have to wonder what to say to God. With
                Scriptured Prayer, your conversations will flow naturally. As
                you regularly talk with God, you will come to know him better,
                love him more, and trust him completely.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-olive">
        <div className="px-6 py-8 md:py-16 max-w-screen-xl mx-auto">
          <h2 className="text-white text-center uppercase font-bold text-2xl md:text-4xl mb-6">
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
            className="px-6 pt-8 md:space-x-12 max-w-screen-xl mx-auto"
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
      <div className="bg-olive">
        <div className="px-6 py-8 md:py-16 max-w-screen-xl mx-auto">
          <h2 className="text-white text-center uppercase font-bold text-2xl md:text-4xl mb-6">
            Frequently Asked Questions
          </h2>
          <div className="py-6">
            <Faq />
          </div>
        </div>
      </div>
      <Footer color="night" />
    </>
  );
}
