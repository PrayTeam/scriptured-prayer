import { Button } from "~/components/form";
// import dryGrass from "~/assets/images/dry-grass.jpg";
// import blueSunset from "~/assets/images/blue-sunset.jpg";
// import genericMan from "~/assets/images/generic-man.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamContainer from "../components/teamContainer";
// import teamCard from '../components/teamCard';

import "~/swiper.css";

export function About() {
  return (
    <div className="bg-snowgrass h-full">
      <div className="h-3/4 min-h-96 flex px-6 py-8 md:py-16 md:space-x-12 w-full mx-auto bg-[url('~/assets/images/dry-grass.jpg')]">
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
            <Button className="bg-lichen">
              <h1 className="text-night">Our Privacy Policy</h1>
            </Button>
          </div>
        </div>
      </div>
      <div className="h-auto bg-cover bg-lichen">
        <h1 className="w-full bg-opacity-20  text-4xl text-center pt-5 pb-3 text-night">
          Meet The Team
        </h1>
        <div className="w-full bg-cente flex items-center justify-center bg-opacity-2">
          <TeamContainer />
        </div>
      </div>
    </div>
  );
}
