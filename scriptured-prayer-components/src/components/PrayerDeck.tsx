import { useState, useEffect } from "react";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "~/swiper.css";
import UserCard from "./UserCard";
import { useApi } from "~/hooks";
import { UserCardResponse } from "~/api/models/responses";

function PrayerDeck() {
  const api = useApi();
  const [userCards, setUserCards] = useState<UserCardResponse[]>([]);

  useEffect(() => {
    (async () => {
      api
        .usercards()
        .then((cards) => {
          setUserCards(cards);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <>
      <Flex direction="column">
        <Heading size="7" my="4" className="text-black text-center">
          Today's Prayers
        </Heading>

        <Swiper
          className="px-2 w-full"
          modules={[Navigation, Keyboard, A11y]}
          spaceBetween="14rem"
          slidesPerView={1}
          keyboard
        >
          {userCards.map((userCard) => (
            <SwiperSlide key={userCard.id}>
              <UserCard {...userCard} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button color="blue" size="4" className="w-80 mx-auto mt-4">
          <CheckIcon width="24" height="24" />
          Finish Prayer Session
        </Button>
      </Flex>
    </>
  );
}

export default PrayerDeck;
