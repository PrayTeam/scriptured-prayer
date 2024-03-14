import React from "react";
import { SwiperSlide } from "swiper/react";

interface SlideProps {
  image: string;
  name: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({ image, name, description }) => {
  return (
    <SwiperSlide className="flex place-items-center pb-5 rounded-3xl flex-col w-full">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="md:block object-cover flex aspect-square w-full place-content-center place-items-center items-center bg-gray pb-0 rounded-t-3xl"
        />
        <div className="bg-opacity-70 bg-white absolute w-full h-1/6 bottom-0 flex items-center place-content-center">
          <h1 className="text-center text-3xl">{name}</h1>
        </div>
      </div>
      <div className="shadow-inner bg-darkGray text-center text-lg w-full p-5 rounded-b-3xl">
        {description}
      </div>
    </SwiperSlide>
  );
};

export default Slide;
