import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

import { DailyDeckDetailResponse } from "~/api/models/responses";
import { Card, Loader, PrayerDeck } from "~/components";
import { useApi } from "~/hooks";

export function DailyDeck() {
  const api = useApi();
  const [loading, setLoading] = useState(true);
  const [countdownElapsed, setCountdownElapsed] = useState(false);
  const [dailyDeck, setDailyDeck] = useState<DailyDeckDetailResponse | null>();

  useEffect(() => {
    // delay at least 1 second before we unhide the "now praying" message curtain
    setTimeout(() => setCountdownElapsed(true), 1000);

    if (!dailyDeck) {
      (async () => {
        api.dailyDecks
          .get({ detail: true })
          .then((_dailyDeck) => {
            setDailyDeck(_dailyDeck);
          })
          .catch((error) => console.error(error))
          .finally(() => {
            setLoading(false);
            setCountdownElapsed(true);
          });
      })();
    }
  }, [dailyDeck]);

  if (loading)
    return (
      <div className="flex w-full h-full justify-center items-center">
        <Loader className="animate-spin" />
      </div>
    );

  if (!dailyDeck) return <Navigate to="/daily-deck/edit" />;

  return (
    <PrayerDeck title="My Daily Deck" loading={loading || !countdownElapsed}>
      {dailyDeck.cards.map((card) => (
        <SwiperSlide key={card.id}>
          <Card
            category={card.category}
            title={card.title}
            body={card.scripture_text.map((st) => st.text).join(" ")}
            scripture={card.scripture}
            instruction={card.instruction}
          />
        </SwiperSlide>
      ))}
    </PrayerDeck>
  );
}

export * from "./CreateDailyDeck";
export * from "./EditDailyDeck";
