import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "~/swiper.css";
import { useApi } from "~/hooks";
import { CardResponse } from "~/api/models/responses";
import { Card } from "./Card";

function PrayerDeck() {
  const api = useApi();
  const { name } = useParams();
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [focus, setFocus] = useState<string>(""); // focus/preamble/inspiration

  useEffect(() => {
    (async () => {
      api.cards
        .all({ category__name: name })
        .then((cards) => {
          setCards(cards);
          console.log(cards);
        })
        .catch((error) => console.error(error));
    })();

    // get focus/preamble/inspiration
    (async () => {
      api.categories
        .all() // because api.categories only gets all categories
        .then((cats) => {
          const cat = cats.find((cat) => {
            return cat.name === name;
          }); // find the category we clicked on
          const f = cat ? cat.inspiration : "none"; // make sure category exists (it will but tsx be stubborn), get focus f from it
          // todo: parse f to get rid of weird characters (or change the ' " chars in the spreadsheet)
          setFocus(f);
          console.log(cats);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

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
          {/* focus card */}
          <SwiperSlide>
            <p className="text-white">{focus}</p>
            {/* todo: make a focus card so we can just pass the whole CategoryResponse in */}
          </SwiperSlide>
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
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
