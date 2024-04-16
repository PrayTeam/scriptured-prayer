import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Deck } from "~/components";
import { Footer } from "~/components";
import { DemoPrayerDeck } from "~/types";
import { useDemoPrayerDecks } from "~/hooks";
import forest from "~/assets/images/forest.jpg";
import nature from "~/assets/images/nature.jpg";

export function Info() {
  const navigate = useNavigate();
  const demoPrayerDecks = useDemoPrayerDecks();
  const [prayerDecks, setPrayerDecks] = useState<DemoPrayerDeck[][]>([]);

  const today = new Date();
  const date = today.getDate();
  const ones_digit = date % 10;
  const date_suffix =
    ([11, 12, 13].includes(date) && "th") ||
    (ones_digit === 1 && "st") ||
    (ones_digit === 2 && "nd") ||
    (ones_digit === 3 && "rd") ||
    "th";
  const month_names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day_names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date_string = `${day_names[today.getDay()]}, ${month_names[today.getMonth()]} ${date}${date_suffix}, ${today.getFullYear()}`;

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
      <div className="bg-lichen bg-opacity-80 max-h-fit py-36 flex justify-center items-center pl-0 lg:pl-20 pt-52 pb-20 lg:pt-32 lg:pb-32">
        <div className="bg-gray px-8 lg:pl-10 pt-10 lg:pt-0 rounded-3xl flex flex-col justify-center items-center h-[400px] min-w-[350px] w-2/3 lg:w-auto lg:aspect-[13/8] relative shadow-lg">
          <img
            className="absolute h-44 sm:h-52 lg:h-64 aspect-[11/8] sm:aspect-[13/7] lg:aspect-square rounded-lg left-auto -top-24 sm:-top-32 lg:top-auto lg:-left-32"
            src={nature}
            alt="Image of Nature"
          />
          <div className="w-full lg:w-1/2 flex flex-col gap-1 lg:items-start items-center font-medium">
            <p className="mb-3">{date_string}</p>
            <h2 className="font-bold text-3xl">Today's Daily Deck</h2>
            <p className="text-lg text-center lg:text-left">
              A group of verses that encourage praise and thanksgiving.
            </p>
            <a
              href="/prayer-decks/daily"
              className="bg-leaf rounded-lg text-center text-white shadow-md shadow-night w-52 mt-8 p-2"
            >
              <p className="text-lg font">Pray</p>
              <p>2 min | 5 cards</p>
            </a>
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
      <Footer color="night" />
    </>
  );
}
