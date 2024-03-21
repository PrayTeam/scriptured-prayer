import fallbackimage from "~/assets/images/No_image_available.svg";

interface Props {
  image?: string;
  name: string;
  position: string;
  description: string;
}

const TeamMemberCard = ({ image, name, position, description }: Props) => {
  return (
    <div>
      <div className="relative w-full bg-snowgrass rounded-t-3xl">
        <img
          src={image ? image : fallbackimage}
          alt={name}
          className="w-full bg-gray rounded-t-3xl"
        />
        <div className="bg-opacity-90 bg-white absolute w-full h-1/6 bottom-0 flex items-center place-content-center">
          <h1 className="text-3xl">{name}</h1>
        </div>
      </div>
      <div className="bg-snowgrass text-center text-lg w-full pt-3 rounded-b-3xl">
        <p className="text-2xl font-semibold">{position}</p>
        <p className="p-3 md:text-lg text-base">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
