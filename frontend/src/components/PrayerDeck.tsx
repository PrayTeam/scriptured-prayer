import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "@radix-ui/themes";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "~/swiper.css";
import { useApi, useProfile, useRouteId } from "~/hooks";
import { CardResponse } from "~/api/models/responses";
import { CategoryResponse } from "~/api/models/responses";
import { Card } from "./Card";
import { Loader } from "./Loader";

export function PrayerDeck() {
  const api = useApi();
  const routeId = useRouteId();
  const navigate = useNavigate();
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

        Promise.all([
          cardsApi.all({ card__category__id: routeId }),
          api.categories.all(),
        ])
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
    <div className="bg-ghost h-full relative">
      <Flex direction="column">
        <Swiper
          className="px-4 md:px-12 w-full"
          modules={[Navigation, Pagination, Keyboard, A11y]}
          spaceBetween="14rem"
          slidesPerView={1}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          keyboard
          onActiveIndexChange={handleSwipe}
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
                />
              </SwiperSlide>
              {cards.map((card) => (
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
              <SwiperSlide>
                <div className="flex h-full justify-center items-center">
                  <Button
                    onClick={() => navigate("/dashboard")}
                    size="4"
                    className="w-[100px] mx-auto mt-4 bg-lichen transition-opacity ease-in"
                  >
                    Done
                  </Button>
                </div>
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </Flex>
      <div
        style={{ opacity: loading || !countdownElapsed ? 1 : 0 }}
        className="absolute flex flex-col w-full h-full bg-black text-white justify-center items-center transition-opacity ease-in top-0 left-0 z-10 pointer-events-none"
      >
        <h1 className="text-lg font-bold mb-4">Loading prayers</h1>
        <Loader className="animate-spin" />
      </div>
    </div>
  );
}
