import { useState, useEffect } from "react";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "~/swiper.css";
import { useApi, useRouteId } from "~/hooks";
import { CardResponse } from "~/api/models/responses";
import { CategoryResponse } from "~/api/models/responses";
import { Card } from "./Card";

function PrayerDeck() {
  const api = useApi();
  const id = useRouteId();
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [category, setCategory] = useState<CategoryResponse>();

  useEffect(() => {
    if (id) {
      (async () => {
        Promise.all([api.cards.all({ category__id: id }), api.categories.all()])
          .then(([_cards, categories]) => {
            setCards(_cards);
            setCategory(categories.find((c) => c.id === id));
          })
          .catch((error) => console.error(error));
      })();
    }
  }, []);

  if (!id) return <>Error: an id must be provided.</>;

  return (
    <div className="bg-ocean h-full">
      <Flex direction="column">
        <Heading size="7" my="4" className="text-white text-center">
          {cards.length > 0 ? cards[0].category : "Loading..."}
        </Heading>

        <Swiper
          className="px-2 md:px-12 w-full"
          modules={[Navigation, Pagination, Keyboard, A11y]}
          spaceBetween="14rem"
          slidesPerView={1}
          pagination={{ clickable: true }}
          keyboard
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
