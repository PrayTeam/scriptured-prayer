import { Button } from "~/components/form";
import TeamContainer from "../components/TeamMemberCarousel";
import { Container } from "~/components";
import dryGrass from "~/assets/images/dry-grass.jpg";

export function About() {
  return (
    <div className="bg-lichen h-full min-w-72">
      <div className="bg-snowgrass flex flex-col">
        <Container>
          <div className="lg:flex px-6 py-8 lg:py-16 lg:space-x-12 lg:items-center max-w-screen-xl mx-auto grow">
            <div className="max-w-[700px] mb-8">
              <img src={dryGrass} />
            </div>
            <div>
              <h2 className="uppercase font-bold text-4xl">About us</h2>
              <div className="my-8 text-xl">
                <h3 className="font-bold uppercase">Phone Number</h3>
                {/* change number */}
                <div className="my-2">(123) 456-7890</div>
              </div>
              <div className="my-8 text-xl">
                {/* change email */}
                <h3 className="font-bold uppercase">Email Address</h3>
                <div className="my-2">hello@scripturedprayer.com</div>
              </div>
              <Button>Our Privacy Policy</Button>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-lichen">
        <Container>
          <h1 className="text-4xl text-center pt-5 pb-3 text-night">
            Meet the Pray Team
          </h1>
          <TeamContainer />
        </Container>
      </div>
    </div>
  );
}
