import { Button } from "~/components/form";
// import dryGrass from "~/assets/images/dry-grass.jpg";
// import blueSunset from "~/assets/images/blue-sunset.jpg";
// import genericMan from "~/assets/images/generic-man.png";
import randomGuy from "~/assets/images/random-guy.jpg";
import randomGirl from "~/assets/images/random-girl.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "~/swiper.css";

export function About() {
  return (
    <div className="bg-snowgrass h-full">
      <div className="h-3/4 flex px-6 py-8 md:py-16 md:space-x-12 w-full mx-auto bg-[url('~/assets/images/dry-grass.jpg')]">
        {/* <img src={dryGrass} className="hidden md:block max-w-[700px]" /> */}
        <div>
          <div className="">
            <h2 className="uppercase font-bold text-4xl">About us</h2>
            <div className="my-8 text-xl">
              <h3 className="font-bold uppercase">Phone Number</h3>
              <div className="my-2">(123) 456-7890</div>
            </div>
            <div className="my-8 text-xl">
              <h3 className="font-bold uppercase">Email Address</h3>
              <div className="my-2">hello@scripturedprayer.com</div>
            </div>
            <Button>Our Privacy Policy</Button>
          </div>
        </div>
      </div>
      {/* <div className="h-full bg-cover bg-[url('~/assets/images/blue-sunset.jpg')]"> */}
      <div className="h-4/5 bg-cover bg-[#f2f2f2]">
        <h1 className="w-full bg-opacity-20  text-3xl text-center pt-3">
          Meet The Team
        </h1>
        <div className="w-full bg-center flex items-center justify-center bg-opacity-2">
          {/* <div className="bg-white w-full flex justify-center"> */}
          <Swiper
            className="w-full p-10 pt-5"
            modules={[Navigation, Pagination, Keyboard, A11y]}
            loop={true}
            spaceBetween="100"
            slidesPerView={3}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            keyboard
          >
            <SwiperSlide className="flex place-items-center pb-5 rounded-3xl flex-col">
              <div className="relative">
                <img
                  src={randomGuy}
                  className="md:block object-cover flex aspect-square w-full place-content-center place-items-center items-center bg-gray pb-0 rounded-t-3xl"
                ></img>
                <div className="bg-opacity-50 bg-white absolute w-full h-1/6 bottom-0 flex items-center place-content-center">
                  <h1 className="text-center text-3xl">Judah Rininger</h1>
                </div>
              </div>
              <div className="shadow-inner bg-[#9da1a1] text-center text-lg w-full p-5 rounded-b-3xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere deleniti officiis non vero repellendus
                dignissimos, praesentium esse explicabo.
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex place-items-center pb-5 rounded-3xl flex-col">
              <div className="relative">
                <img
                  src={randomGirl}
                  className="md:block object-cover flex aspect-square w-full place-content-center place-items-center items-center bg-gray pb-0 rounded-t-3xl"
                ></img>
                <div className="bg-opacity-50 bg-white absolute w-full h-1/6 bottom-0 flex items-center place-content-center">
                  <h1 className="text-center text-3xl">Judah Rininger</h1>
                </div>
              </div>
              <div className="shadow-inner bg-[#9da1a1] text-center text-lg w-full p-5 rounded-b-3xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere deleniti officiis non vero repellendus
                dignissimos, praesentium esse explicabo.
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex place-items-center pb-5 rounded-3xl flex-col">
              <div className="relative">
                <img
                  src={randomGuy}
                  className="md:block object-cover flex aspect-square w-full place-content-center place-items-center items-center bg-gray pb-0 rounded-t-3xl"
                ></img>
                <div className="bg-opacity-50 bg-white absolute w-full h-1/6 bottom-0 flex items-center place-content-center">
                  <h1 className="text-center text-3xl">Judah Rininger</h1>
                </div>
              </div>
              <div className="shadow-inner bg-[#9da1a1] text-center text-lg w-full p-5 rounded-b-3xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere deleniti officiis non vero repellendus
                dignissimos, praesentium esse explicabo.
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex place-items-center pb-5 rounded-3xl flex-col">
              <img
                src={randomGirl}
                className=" md:block object-cover flex aspect-square w-full place-content-center place-items-center items-center bg-gray pb-0 rounded-t-3xl"
              ></img>
              <div className=" flex flex-col  place-items-center shadow-inner bg-[#9da1a1] text-lg w-full rounded-b-3xl">
                <h1 className="text-center text-3xl p-3 border-b w-2/3">
                  Judah Rininger
                </h1>
                <p className="text-center p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit facere deleniti officiis non vero repellendus
                  dignissimos, praesentium esse explicabo.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex place-items-center pb-5 rounded-3xl flex-col">
              <img
                src={randomGuy}
                className=" md:block object-cover flex aspect-square w-full place-content-center place-items-center items-center bg-gray pb-0 rounded-t-3xl"
              ></img>
              <div className=" flex flex-col  place-items-center shadow-inner bg-[#9da1a1] text-lg w-full rounded-b-3xl">
                <h1 className="text-center text-3xl p-3 border-b w-2/3">
                  Judah Rininger
                </h1>
                <p className="text-center p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit facere deleniti officiis non vero repellendus
                  dignissimos, praesentium esse explicabo.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex place-items-center pb-5 rounded-3xl flex-col">
              <img
                src={randomGirl}
                className=" md:block object-cover flex aspect-square w-full place-content-center place-items-center items-center bg-gray pb-0 rounded-t-3xl"
              ></img>
              <div className=" flex flex-col  place-items-center shadow-inner bg-[#9da1a1] text-lg w-full rounded-b-3xl">
                <h1 className="text-center text-3xl p-3 border-b w-2/3">
                  Judah Rininger
                </h1>
                <p className="text-center p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit facere deleniti officiis non vero repellendus
                  dignissimos, praesentium esse explicabo.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
