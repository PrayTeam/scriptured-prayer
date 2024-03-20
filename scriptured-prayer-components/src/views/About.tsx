import { Button } from "~/components/form";
import dryGrass from "~/assets/images/dry-grass.jpg";
import { Footer } from "~/components";

export function About() {
  return (
    <div className="bg-snowgrass h-full flex flex-col">
      <div className="lg:flex px-6 py-8 lg:py-16 lg:space-x-12 lg:items-center max-w-screen-xl mx-auto grow">
        <div className="max-w-[700px] mb-8">
          <img src={dryGrass} />
        </div>
        <div>
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
      <Footer color="blue" />
    </div>
  );
}
