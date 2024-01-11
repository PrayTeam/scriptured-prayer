import { useState, useEffect } from "react";
import { Button } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.css'

import UserCard from "./UserCard";

export interface UserCardProps {
  id: number;
  card: string;
  // "usercardnote_set": [],
  // "answered": false,
  // "hidden": false,
  // "in_prayer_deck": false
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
      <h2>Today's Prayers</h2>

      <Swiper

        className="p-16 bg-teal-900"
        modules={[Navigation, Pagination, Keyboard, A11y]}
        spaceBetween='14rem'
        slidesPerView={1}
        onSlideChange={(item) => console.log(item)}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        keyboard
      >
        {userCards.map((item) => (
          <SwiperSlide key={item.id} >
            <UserCard usercard={item} />  
          </SwiperSlide>
        ))}
      </Swiper>     

        <Button className="text-lg"> 
        <BookmarkIcon width="16" height="16" />
        Finish Prayer Session</Button>

    </>
  );
};

export default PrayerDeck;
