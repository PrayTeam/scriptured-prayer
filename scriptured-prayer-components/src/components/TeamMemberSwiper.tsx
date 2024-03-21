import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "~/swiper.css";
import follin from "~/assets/images/clark_follin.jpg";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberSwiper = () => {
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
        680: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <TeamMemberCard
          image={follin}
          name="Follin Clark"
          position="Creator"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Ben Clark"
          position="Co-Creator"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Temp Name"
          position="N/A"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Temp Name"
          position="N/A"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Temp Name"
          position="N/A"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Temp Name"
          position="N/A"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamMemberSwiper;
