import fallbackimage from "~/assets/images/No_image_available_white.svg";

interface Props {
  image?: string;
  name: string;
  position: string;
  description: string;
}

const TeamMemberCard = ({ image, name, position, description }: Props) => {
  return (
    <div>
      <div className="relative w-full bg-gray rounded-t-3xl object-cover">
        <img
          src={image ?? fallbackimage}
          alt={name}
          className={`w-full bg-gray rounded-t-xl sm:rounded-t-3xl object-cover ${image ? "fallback-image-class" : "p-16 sm:scale-50"}`}
        />
        <div className="bg-opacity-90 bg-white absolute w-full h-1/6 bottom-0 flex items-center place-content-center">
          <h1 className="text-m sm:text-3xl">{name}</h1>
        </div>
      </div>
      <div className="bg-snowgrass text-center text-lg w-full pt-3 rounded-b-xl sm:rounded-b-3xl min-h-40">
        <p className="text-m font-semibold sm:text-2xl">{position}</p>
        <p className="p-3 md:text-lg sm:text-base text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
