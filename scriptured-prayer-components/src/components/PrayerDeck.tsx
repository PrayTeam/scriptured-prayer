import { useState, useEffect } from "react";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "~/swiper.css";
import { useApi, useProfile, useRouteId } from "~/hooks";
import { CardResponse, UserCardResponse } from "~/api/models/responses";
import { Card } from "./Card";

function PrayerDeck() {
  const api = useApi();
  const id = useRouteId();
  const [cards, setCards] = useState<CardResponse[] | UserCardResponse[]>([]);
  const { profile } = useProfile();
  const [activeCardId, setActiveCardId] = useState<number>();

  useEffect(() => {
    if (id) {
      (async () => {
        profile && profile.authenticated
          ? api.userCards
              .all({ card__category__id: id })
              .then((userCards) => {
                setCards(userCards);
                setActiveCardId(cards[0].id);
                return userCards;
              })
              .catch((error) => console.error(error))
          : api.cards
              .all({ category__id: id })
              .then((cards) => {
                setCards(cards);
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
          onActiveIndexChange={
            profile && profile.authenticated
              ? (swiper) => {
                  activeCardId && api.userCards.logCard(activeCardId);

                  const new_card = swiper.slides[swiper.activeIndex];
                  new_card.dataset.id &&
                    setActiveCardId(parseInt(new_card.dataset.id));
                }
              : () => {}
          }
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} data-id={card.id}>
              <Card {...card} />
            </SwiperSlide>
          ))}
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
