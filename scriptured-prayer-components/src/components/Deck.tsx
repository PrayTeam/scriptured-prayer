//import { theme } from "~/tailwind.config";

interface DeckProps {
  title: string;
  description: string;
  image: string;

  color: string;
  //color: keyof typeof theme.colors;

  scaleOnHover?: boolean;
  onClick: () => void;
}

export function Deck({
  title,
  description,
  image,
  color,
  scaleOnHover,
  onClick,
}: DeckProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col relative w-full items-center mb-4 overflow-clip rounded-xl text-white ${scaleOnHover ? "md:hover:scale-105" : "flex-[0_0_auto]"} lg:w-[400px] h-[550px] ease-out duration-300 cursor-pointer`}
    >
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className="absolute w-full h-full bg-no-repeat bg-center bg-cover"
      ></div>
      <div
        style={{ backgroundColor: color }}
        className="absolute w-full h-full opacity-50"
      ></div>
      <div className="flex flex-col w-full h-full relative z-10">
        <div className="flex p-6 justify-center items-center text-center uppercase text-4xl lg:text-5xl font-bold grow">
          {title}
        </div>
        <div style={{ backgroundColor: color }} className="p-6 text-xl">
          {description}
        </div>
      </div>
    </div>
  );
}
