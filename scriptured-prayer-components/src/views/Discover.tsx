//import dryGrass from "~/assets/dry-grass.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Keyboard, A11y } from "swiper/modules";

import Footer from "~/components/Footer";
import { useState } from "react";
import DeckCard from "~/components/DeckCard";
import { Heading } from "@radix-ui/themes";

export interface PrayerDeckProps {
  title: string;
  subtitle?: string;
  length: number;
}

const staticPraiseDecks = [
  { title: "Names of God", length: 37 },
  { title: "Names of Jesus", length: 41 },
  { title: "Names of the Holy Spirit", length: 16 },
  { title: "God is...", length: 16 },
];

export function Discover() {
  const [praiseDecks] = useState<PrayerDeckProps[]>(staticPraiseDecks);

  return (
    <div className="bg-snowgrass h-full flex flex-col">
      <div className="flex px-6 py-8 md:py-16 md:space-x-12 max-w-screen-xl mx-auto">
        <h2 className="uppercase font-bold text-4xl">Discover Prayer Decks</h2>
      </div>

      <div className="p-4">
        <Heading size="8" className="px-2">
          Praise
        </Heading>

        <Swiper
          className="px-2 w-full"
          modules={[Navigation, Keyboard, A11y]}
          spaceBetween="5"
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          pagination
        >
          {praiseDecks.map((praiseDeck) => (
            <SwiperSlide key={praiseDeck.title}>
              <DeckCard {...praiseDeck} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-4">
        <Heading size="8" className="px-2">
          Thanksgiving
        </Heading>

        <Swiper
          className="px-2 w-full"
          modules={[Navigation, Keyboard, A11y]}
          spaceBetween="5"
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          pagination
        >
          {praiseDecks.map((praiseDeck) => (
            <SwiperSlide key={praiseDeck.title}>
              <DeckCard {...praiseDeck} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
    </div>
  );
}
