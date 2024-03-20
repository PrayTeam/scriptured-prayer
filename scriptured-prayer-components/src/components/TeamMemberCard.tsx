interface Props {
  image: string;
  name: string;
  position: string;
  description: string;
}

const TeamMemberCard = ({ image, name, position, description }: Props) => {
  return (
    <div className="flex place-items-center pb-0 flex-col">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="md:block object-cover flex aspect-square w-full place-content-center place-items-center items-center bg-gray pb-0 rounded-t-3xl"
        />
        <div className="bg-opacity-90 bg-white absolute w-full h-1/6 bottom-0 flex items-center place-content-center">
          <h1 className="text-center text-3xl">{name}</h1>
        </div>
      </div>
      <div className="bg-snowgrass text-center text-lg w-full p-5 rounded-b-3xl">
        <p className="text-2xl">{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
