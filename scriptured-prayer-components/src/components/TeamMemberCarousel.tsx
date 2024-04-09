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
  const members = [
    {
      image: `${follin}`,
      name: "Follin Clark",
      position: "Visionary",
      description:
        "Contributed heartfelt content and spiritual guidance to Scriptured Prayer",
    },
    {
      image: `${ben}`,
      name: "Ben Clark",
      position: "Co-Creator",
      description: "Co-Creator of Scriptured Prayer",
    },
    {
      name: "Asher Lloyd",
      position: "Front-End Developer",
      description:
        "Designs and manages the user interface of Scriptured Prayer",
    },
    {
      name: "Robbie Nichols",
      position: "Freed Hardeman Alumn",
      description: "Back-End Developer",
    },
    {
      image: `${kenan}`,
      name: "Kenan Casey",
      position: "Developer",
      description: "Professor at FHU",
    },
    {
      name: "Madison Cagle",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
    {
      name: "Jaydon Dulgar",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
    {
      name: "Samuel Flowers",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
    {
      name: "Bryce Green",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
    {
      name: "Sean Janiec",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
    {
      name: "Louviers Joseph",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
    {
      name: "Savannah Martin",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
    {
      name: "Judah Rininger",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
    {
      name: "Lauren Taylor",
      position: "Student Developer",
      description: "2024 Freed-Hardeman student developer",
    },
  ];

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
      {members.map((member) => (
        <SwiperSlide>
          <TeamMemberCard
            image={member.image}
            name={member.name}
            position={member.position}
            description={member.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamMemberCarousel;
