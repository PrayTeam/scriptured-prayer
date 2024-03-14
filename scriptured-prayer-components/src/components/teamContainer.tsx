import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "~/swiper.css";
import Slide from "./teamCard";
import randomGuy from "~/assets/images/random-guy.jpg";
import randomGirl from "~/assets/images/random-girl.jpg";

const TeamContainer: React.FC = () => {
  return (
    <Swiper
      className="w-full p-10 pt-5"
      modules={[Navigation, Pagination, Keyboard, A11y]}
      loop={true}
      spaceBetween={100}
      slidesPerView={1}
      slidesPerGroup={1}
      pagination={{ clickable: true }}
      keyboard
      breakpoints={{
        1100: {
          slidesPerView: 3,
        },
        730: {
          slidesPerView: 2,
        },
        // Add more breakpoints as needed
      }}
    >
      <SwiperSlide>
        <Slide
          image={randomGuy}
          name="The Rock"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={randomGirl}
          name="Amanda Jamanda"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={randomGuy}
          name="Dwayne Johnson"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={randomGirl}
          name="Sadison"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={randomGuy}
          name="The Brahma Bull"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={randomGirl}
          name="Evil Kneival"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      {/* Add more Slide components with different information */}
    </Swiper>
  );
};

export default TeamContainer;
