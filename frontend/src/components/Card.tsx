import { Badge, Text } from "@radix-ui/themes";

interface CardProps {
  focus?: boolean;
  category: string;
  title: string;
  body: string;
  scripture?: string;
  cardCount?: number;
  instruction?: string;
}

export function Card({
  focus,
  category,
  title,
  body,
  scripture,
  cardCount,
  instruction,
}: CardProps) {
  return (
    <div
      className={`h-full mt-4 py-8 md:py-12 px-6 md:px-16 rounded-md shadow-xl ${focus ? "bg-snowgrass" : "bg-white"}`}
    >
      <div className="flex justify-between">
        <Badge
          radius="small"
          size="2"
          mb="4"
          variant="soft"
          className={`uppercase ${focus ? "text-white bg-ocean/50" : "text-ocean bg-gray"}`}
        >
          {category}
        </Badge>
      </div>

      <h3 className="text-3xl pb-8 text-ocean">{title}</h3>

      <div className={`text-ocean ${!focus && "border-l-8 border-ocean pl-4"}`}>
        <p className="text-lg">{body}</p>
        {scripture && <p className="uppercase text-sm pt-4">{scripture}</p>}
        {cardCount && (
          <Badge
            radius="small"
            size="1"
            mt="4"
            variant="soft"
            className="text-ocean bg-ocean/25"
          >
            {cardCount} cards
          </Badge>
        )}
      </div>

      <Text as="p" size="2" mt="8" className="text-olive text-center">
        {!focus &&
          (instruction && instruction.length > 0
            ? instruction
            : "(No instructions)")}
      </Text>
    </div>
  );
}
