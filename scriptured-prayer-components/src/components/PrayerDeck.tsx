import { useState, useEffect } from "react";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.css'

import UserCard from "./UserCard";

export interface UserCardProps {
  id: number,
  title: string,
  scripture: string,
  category: string,
  usercardnote_set: string[],
  answered: boolean,
  hidden: boolean,
  in_prayer_deck: boolean,
}

const PrayerDeck = () => {
  const [userCards, setUserCards] = useState<UserCardProps[]>([]);

  useEffect(() => {
    // Function to fetch data from the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("/usercards.json");
        const data = await response.json();
        console.log(data.results);
        setUserCards(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs only once

  return (
    <>
    <Flex direction="column" gap='1' className="bg-teal-900 py-8">
      
      <Heading size="7" mt="4" className="text-white text-center">Today's Prayers</Heading>

      <Swiper
        className="pt-2 pb-8 px-16 w-full"
        modules={[Navigation, Pagination, Keyboard, A11y]}
        spaceBetween='14rem'
        slidesPerView={1}
        onSlideChange={(item) => console.log(item)}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        keyboard
      >
        {userCards.map((userCard) => (
          <SwiperSlide key={userCard.id} >
            <UserCard usercard={userCard} />  
          </SwiperSlide>
        ))}
      </Swiper>     

        <Button 
          color="jade"
          size="4"
          className="w-80 m-auto"
        > 
        <CheckIcon width="24" height="24"  />
        Finish Prayer Session</Button>

        </Flex>
    </>
  );
};

export default PrayerDeck;
