import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "~/swiper.css";
import follin from "~/assets/images/clark_follin.jpg";
import ben from "~/assets/images/clark_ben.jpg";
import kenan from "~/assets/images/casey_kenan.jpg";
import TeamMemberCard from "./TeamMemberCardProps";

const TeamMemberCarousel = () => {
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
      }}
    >
      <SwiperSlide>
        <TeamMemberCard
          image={follin}
          name="Follin Clark"
          position="Visionary"
          description="Contributed heartfelt content and spiritual guidance to Scriptured Prayer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          image={ben}
          name="Ben Clark"
          position="Co-Creator"
          description="Co-Creator of Scriptured Prayer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Asher Lloyd"
          position="Front-End Developer"
          description="Designs and manages the user interface of Scriptured Prayer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Robbie Nichols"
          description="Freed Hardeman Alumn"
          position="Back-End Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          image={kenan}
          name="Kenan Casey"
          description="Professor at FHU"
          position="Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Madison Cagle"
          description="2024 Freed-Hardeman student developer"
          position="Student Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Jaydon Dulgar"
          description="2024 Freed-Hardeman student developert"
          position="Student Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Samuel Flowers"
          description="2024 Freed-Hardeman student developer"
          position="Student Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Bryce Green"
          description="2024 Freed-Hardeman student developer"
          position="Student Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Sean Janiec"
          description="2024 Freed-Hardeman student developer"
          position="Student Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Louviers Joseph"
          description="2024 Freed-Hardeman student developer"
          position="Student Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Savannah Martin"
          description="2024 Freed-Hardeman student developer"
          position="Student Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Judah Rininger"
          description="2024 Freed-Hardeman student developer"
          position="Student Developer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberCard
          name="Lauren Taylor"
          description="2024 Freed-Hardeman student developer"
          position="Student Developer"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamMemberCarousel;
