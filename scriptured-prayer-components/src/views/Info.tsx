import { useNavigate } from "react-router-dom";

import forest from "~/assets/images/forest.jpg";
import mountains from "~/assets/images/mountains.jpg";
import clouds from "~/assets/images/clouds.jpg";
import galaxy from "~/assets/images/galaxy.jpg";
import dryGrass from "~/assets/images/dry-grass.jpg";
import readingBible from "~/assets/images/reading-bible.jpg";

import { theme } from "~/tailwind.config";

// todo: delete this. it is just a placeholder
const deckImages = [mountains, forest, galaxy, clouds, dryGrass, readingBible];

const deckColors: (keyof typeof theme.colors)[] = [
  "ocean",
  "olive",
  "obsidian",
  "leaf",
  "indigo",
  "sky",
];

import { Deck } from "~/components";

export function Info() {
  const navigate = useNavigate();

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
      <div className="bg-lichen">
        <div className="px-6 pt-8  md:space-x-12 max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row w-full lg:space-x-12 justify-center ">
            <Deck
              title="God Is"
              description={
                '"God" is verses act as a checkup for your relationship...'
              }
              image={deckImages[2 - 1]}
              color={deckColors[2 - 1]}
              scaleOnHover
              onClick={() => navigate("/prayer-decks/2")}
            />
            <Deck
              title="In Christ"
              description="When we become Christians, it's not simply a label..."
              image={deckImages[5 - 1]}
              color={deckColors[5 - 1]}
              scaleOnHover
              onClick={() => navigate("/prayer-decks/5")}
            />
            <Deck
              title="Promises of God"
              description="Believing God's promises is how the men and women..."
              image={deckImages[6 - 1]}
              color={deckColors[6 - 1]}
              scaleOnHover
              onClick={() => navigate("/prayer-decks/6")}
            />
          </div>
        </div>
        <div className="px-6 pb-8 md:py-8 md:space-x-12 max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row w-full lg:space-x-12 justify-center ">
            <Deck
              title="Names of God"
              description="Look upon God and grow in love with Him..."
              image={deckImages[1 - 1]}
              color={deckColors[1 - 1]}
              scaleOnHover
              onClick={() => navigate("/prayer-decks/1")}
            />

            <Deck
              title="Names of Jesus"
              description="Meditate on the names of Jesus and see the overflow of God’s heart..."
              image={deckImages[3 - 1]}
              color={deckColors[3 - 1]}
              scaleOnHover
              onClick={() => navigate("/prayer-decks/3")}
            />

            <Deck
              title="Names of the Holy Spirit"
              description="When you meditate on these verses and see what the Spirit does for you..."
              image={deckImages[4 - 1]}
              color={deckColors[4 - 1]}
              scaleOnHover
              onClick={() => navigate("/prayer-decks/4")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
