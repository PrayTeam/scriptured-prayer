import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProfilePicture } from "~/components/ProfilePicture";
import { useApi, useProfile } from "~/hooks";
import { Container, Deck } from "~/components";
import { CategoryResponse } from "~/api/models/responses";

import { Footer } from "~/components";
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

export function Home() {
  const navigate = useNavigate();
  const { profile } = useProfile();

  const api = useApi();
  const [categories, setCategories] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    (async () => {
      api.categories
        .all()
        .then((categories) => {
          setCategories(categories);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-br from-purple from-10% via-purple via-30% to-blue to-90%">
      <Container className="grow flex w-4/5">
        <div className="flex flex-col w-full px-8">
          <div className="flex items-center w-full justify-between mb-4">
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
              {categories.map((category, i) => (
                <Deck
                  key={i}
                  title={category.name}
                  description={"Lorem ipsum dolor sit amet"}
                  image={deckImages[i]}
                  color={deckColors[i]}
                  // todo: use an id instead of category name to retrieve cards
                  onClick={() => navigate(`/prayer-decks/${category.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer color="night" />
    </div>
  );
}
