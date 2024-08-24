import { theme } from "~/tailwind.config";

interface DeckProps {
  title: string;
  description: string;
  color: keyof typeof theme.colors;
  scaleOnHover?: boolean;
  onClick: () => void;
}

export function Deck({
  title,
  description,
  color,
  scaleOnHover,
  onClick,
}: DeckProps) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: theme.colors[color] }}
      className={`flex flex-col w-full items-center mb-4 rounded-xl text-white ${scaleOnHover ? "md:hover:scale-105" : "flex-[0_0_auto]"} lg:w-[400px] h-[550px] ease-out duration-300 cursor-pointer`}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex p-6 justify-center items-center text-center uppercase text-4xl lg:text-5xl font-bold grow">
          {title}
        </div>
        <div className="p-6 text-xl">{description}</div>
      </div>
    </div>
  );
}
