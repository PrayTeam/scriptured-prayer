import { useState, useEffect } from "react";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";
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

function PrayerDeck() {
  const api = useApi();
  const routeId = useRouteId();
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
          .catch((error) => console.error(error));
      })();
    }
  }, []);

  if (!routeId) return <>Error: an id must be provided.</>;

  return (
    <div className="bg-ocean h-full">
      <Flex direction="column">
        <Heading size="7" my="4" className="text-white text-center">
          {cards.length > 0 ? "Now Praying" : "Loading..."}
        </Heading>

        <Swiper
          className="px-2 md:px-12 w-full"
          modules={[Navigation, Pagination, Keyboard, A11y]}
          spaceBetween="14rem"
          slidesPerView={1}
          pagination={{ clickable: true }}
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
            </>
          )}
        </Swiper>

        <Button size="4" className="w-80 mx-auto mt-4 bg-lichen">
          <CheckIcon width="24" height="24" />
          Finish Prayer Session
        </Button>
      </Flex>
    </div>
  );
}

export default PrayerDeck;
