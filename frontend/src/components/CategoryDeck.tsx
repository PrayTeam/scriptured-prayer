import { useState, useEffect } from "react";
import { SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "~/swiper.css";
import { useApi, useProfile, useRouteId } from "~/hooks";
import { CardResponse } from "~/api/models/responses";
import { CategoryResponse } from "~/api/models/responses";
import { Card } from "./Card";
import { PrayerDeck } from "./PrayerDeck";
import { categoryColors } from "~/utilities";

export function CategoryDeck() {
  const api = useApi();
  const routeId = useRouteId();
  const [loading, setLoading] = useState(true);
  const [countdownElapsed, setCountdownElapsed] = useState(false);
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [category, setCategory] = useState<CategoryResponse>();
  const { profile } = useProfile();
  const [activeCardId, setActiveCardId] = useState<number>();
  const [authenticated] = useState(profile && profile.authenticated);

  const handleSwipe = (swiper: SwiperClass) => {
    // skip the "inspiration" card at the beginning
    if (!authenticated || swiper.previousIndex === 0) return;
    activeCardId && api.userCards.logCard(activeCardId);
    const {
      dataset: { id },
    } = swiper.slides[swiper.activeIndex];
    id && setActiveCardId(+id);
  };

  useEffect(() => {
    // delay at least 1 second before we unhide the "now praying" message curtain
    setTimeout(() => setCountdownElapsed(true), 1000);

    if (routeId) {
      (async () => {
        const cardsApi = authenticated ? api.userCards : api.cards;
        const cardsApiRequest = authenticated
          ? { card__category__id: routeId }
          : { category__id: routeId };

        Promise.all([cardsApi.all(cardsApiRequest), api.categories.all()])
          .then(([_cards, categories]) => {
            setCards(_cards);
            setCategory(categories.find((c) => c.id === routeId));
            if (authenticated) setActiveCardId(_cards[0].id); // todo
          })
          .catch((error) => console.error(error))
          .finally(() => {
            setLoading(false);
            setCountdownElapsed(true);
          });
      })();
    }
  }, []);

  if (!routeId) return <>Error: an id must be provided.</>;

  return (
    <PrayerDeck
      title="Category Deck"
      loading={loading || !countdownElapsed}
      onCardChange={handleSwipe}
    >
      {category && (
        <>
          <SwiperSlide>
            <Card
              focus
              category={category.name}
              title="Inspiration"
              body={category.inspiration}
              cardCount={category.card_count}
              color="ghost"
            />
          </SwiperSlide>
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              {/* todo: get card color from backend? */}
              <Card
                category={card.category}
                title={card.title}
                body={card.scripture_text.map((st) => st.text).join(" ")}
                scripture={card.scripture}
                instruction={card.instruction}
                color={categoryColors[card.category]}
              />
            </SwiperSlide>
          ))}
        </>
      )}
    </PrayerDeck>
  );
}
