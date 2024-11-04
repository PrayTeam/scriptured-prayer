import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProfilePicture } from "~/components/ProfilePicture";
import { useApi, useProfile } from "~/hooks";
import { Container, Deck, Loader } from "~/components";
import { CategoryResponse, DailyDeckResponse } from "~/api/models/responses";
import { deckColors } from "~/utilities";
import { Button } from "~/components/form";
import { useDemoDeckConfig } from "~/hooks/useDemoDeckConfig";

export function Dashboard() {
  const navigate = useNavigate();
  const { profile } = useProfile();

  const api = useApi();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [dailyDeck, setDailyDeck] = useState<DailyDeckResponse | null>(null);
  const demoDeckConfig = useDemoDeckConfig();

  useEffect(() => {
    (async () => {
      Promise.all([api.dailyDecks.get(), api.categories.all()])
        .then(([_dailyDeck, categories]) => {
          setDailyDeck(_dailyDeck);
          setCategories(categories);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    })();
  }, []);

  const generateRandomizedDeck = () => {
    (async () => {
      const deckConfig = await demoDeckConfig;
      api.dailyDecks
        .create({ config: JSON.stringify(deckConfig) })
        .then(() => navigate("/daily-deck"))
        .catch((error) => console.error(error));
    })();
  };

  return (
    <Container className="grow flex w-full">
      <div className="flex flex-col w-full">
        <div className="flex items-center w-full justify-between mb-4">
          <h1 className="text-2xl text-black font-black">
            Welcome{profile && profile.username ? `, ${profile.username}` : ""}!
          </h1>
          <ProfilePicture onClick={() => navigate("/profile")} />
        </div>
        <h2 className="text-xl uppercase text-black font-semibold mb-4">
          Daily Deck
        </h2>
        {loading ? (
          <div className="flex w-full justify-center">
            <Loader className="animate-spin" />
          </div>
        ) : dailyDeck ? (
          <div className="mb-4">
            <Deck
              title={"Your Daily Deck"}
              description={`${dailyDeck.config.length} cards in this deck`}
              color="obsidian"
              onClick={() => navigate("/daily-deck")}
            />
          </div>
        ) : (
          <div className="flex w-full justify-center my-8">
            <Button
              className="bg-sky max-w-[200px]"
              // onClick={() => navigate("/daily-deck/edit")}
              onClick={() => generateRandomizedDeck()}
            >
              Create Your Deck
            </Button>
          </div>
        )}
        <h2 className="text-xl uppercase text-black font-semibold mb-4">
          Category Decks
        </h2>
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-x-4 -mx-6 md:mx-0 px-6 md:px-0 mb-4">
          {categories.map((category, i) => (
            <Deck
              key={i}
              title={category.name}
              description={category.inspiration}
              color={deckColors[i]}
              onClick={() => navigate(`/prayer-decks/${category.id}`)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
