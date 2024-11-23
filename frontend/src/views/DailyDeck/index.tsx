import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

import { CardResponse } from "~/api/models/responses";
import { Card, Loader, PrayerDeck } from "~/components";
import { useApi } from "~/hooks";

export function DailyDeck() {
  const api = useApi();
  const [loading, setLoading] = useState(true);
  const [countdownElapsed, setCountdownElapsed] = useState(false);
  const [dailyDeck, setDailyDeck] = useState<CardResponse[]>([]);

  useEffect(() => {
    // delay at least 1 second before we unhide the "now praying" message curtain
    setTimeout(() => setCountdownElapsed(true), 1000);

    if (dailyDeck.length === 0) {
      (async () => {
        api.cards
          .all({ limit: 10 })
          .then((cards) => setDailyDeck(cards))
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

  return (
    <PrayerDeck title="My Daily Deck" loading={loading || !countdownElapsed}>
      {dailyDeck.map((card) => (
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
