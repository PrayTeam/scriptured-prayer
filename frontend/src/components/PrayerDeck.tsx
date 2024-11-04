import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@radix-ui/themes";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "~/swiper.css";
import { Loader } from "./Loader";
import { NestedScreen } from "./NestedScreen";

interface PrayerDeckProps {
  title: string;
  children: ReactNode;
  loading: boolean;
  onCardChange?: (swiper: SwiperClass) => void;
}

export function PrayerDeck(props: PrayerDeckProps) {
  const navigate = useNavigate();

  return (
    <>
      <NestedScreen title={props.title}>
        <div className="bg-ghost h-full">
          <div className="flex flex-col">
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
              onActiveIndexChange={props.onCardChange}
            >
              {/* <SwiperSlide>
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
                    body={card.scripture_text
                      .map((st) => st.text)
                      .join(" ")}
                    scripture={card.scripture}
                    instruction={card.instruction}
                  />
                </SwiperSlide>
              ))} */}
              {props.children}
              <SwiperSlide>
                <div className="flex justify-center items-center h-full">
                  <Button
                    onClick={() => navigate("/dashboard")}
                    size="4"
                    className="w-[100px] mx-auto mt-4 bg-lichen transition-opacity ease-in"
                  >
                    Done
                  </Button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </NestedScreen>
      <div
        style={{ opacity: props.loading ? 1 : 0 }}
        className="fixed flex flex-col w-full h-full bg-black text-white justify-center items-center transition-opacity ease-in top-0 left-0 bottom-0 right-0 z-10 pointer-events-none"
      >
        <h1 className="text-lg font-bold mb-4">Loading prayers</h1>
        <Loader className="animate-spin" />
      </div>
    </>
  );
}
