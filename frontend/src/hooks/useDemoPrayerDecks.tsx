import { DemoPrayerDeck } from "~/types";
import forest from "~/assets/images/forest.jpg";
import mountains from "~/assets/images/mountains.jpg";
import clouds from "~/assets/images/clouds.jpg";
import galaxy from "~/assets/images/galaxy.jpg";
import dryGrass from "~/assets/images/dry-grass.jpg";
import readingBible from "~/assets/images/reading-bible.jpg";

// todo: retrieve this data from an endpoint
const demoPrayerDecks: DemoPrayerDeck[][] = [
  [
    {
      title: "God Is",
      description: '"God" is verses act as a checkup for your relationship...',
      image: forest,
      color: "olive",
      id: 2,
    },
    {
      title: "In Christ",
      description: "When we become Christians, it's not simply a label...",
      image: dryGrass,
      color: "indigo",
      id: 5,
    },
    {
      title: "Promises of God",
      description: "Believing God's promises is how the men and women...",
      image: readingBible,
      color: "sky",
      id: 6,
    },
  ],
  [
    {
      title: "Names of God",
      description: "Look upon God and grow in love with Him...",
      image: mountains,
      color: "ocean",
      id: 1,
    },
    {
      title: "Names of Jesus",
      description:
        "Meditate on the names of Jesus and see the overflow of God’s heart...",
      image: galaxy,
      color: "obsidian",
      id: 3,
    },
    {
      title: "Names of the Holy Spirit",
      description:
        "When you meditate on these verses and see what the Spirit does for you...",
      image: clouds,
      color: "leaf",
      id: 4,
    },
  ],
];

// temporarily simulate the async call to our demo prayer decks api endpoint.
export async function useDemoPrayerDecks(): Promise<DemoPrayerDeck[][]> {
  return Promise.resolve(demoPrayerDecks);
}
