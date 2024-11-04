import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { DailyDeckConfig, UserCardResponse } from "~/api/models/responses";
import { CardPreview } from "~/components";
import { Button } from "~/components/form";
import { useApi } from "~/hooks";

function createDailyDeck(selectedCards: UserCardResponse[]) {
  return JSON.stringify(
    selectedCards.map<DailyDeckConfig>((c) => ({ id: c.id, type: "card" })),
  );
}

interface ModalContentProps {
  selectedCardsEntries: UserCardResponse[];
}

const initialShowCount = 4;

export function CreateDailyDeck(props: ModalContentProps) {
  const api = useApi();
  const navigate = useNavigate();
  const submit = () => {
    (async () => {
      api.dailyDecks
        .create({ config: createDailyDeck(props.selectedCardsEntries) })
        .then(() => navigate("/daily-deck"))
        .catch((error) => console.error(error));
    })();
  };
  const cardCount = props.selectedCardsEntries.length;
  const [showCount, setShowCount] = useState(initialShowCount);

  return (
    <div className="w-full">
      <h1 className="text-2xl text-black font-black">Confirm</h1>
      <div className="my-4 text-black">
        These cards will be added to the Daily Deck:
      </div>
      {props.selectedCardsEntries
        .filter((_, i) => i < showCount)
        .map((card, i) => (
          <CardPreview key={i} {...card} />
        ))}
      {showCount < cardCount && (
        <div
          onClick={() => setShowCount(cardCount)}
          className="text-black font-bold text-indigo mb-4 underline"
        >
          Show {cardCount - showCount} more &rarr;
        </div>
      )}
      <Button className="bg-emerald" onClick={submit}>
        Submit
      </Button>
    </div>
  );
}
