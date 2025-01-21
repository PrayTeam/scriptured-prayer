import { Badge, Text } from "@radix-ui/themes";
import { RepeatIcon, RespondIcon, RewordIcon } from "./Icons";
import { theme } from "~/tailwind.config";
import { ThemeColor } from "~/types";

interface CardProps {
  focus?: boolean;
  category: string;
  title: string;
  body: string;
  scripture?: string;
  cardCount?: number;
  instruction?: string;
  color: ThemeColor;
}

interface InstructionIconProps {
  instruction?: string;
  width: string;
  height: string;
  className?: string;
}

function InstructionIcon({ instruction, ...props }: InstructionIconProps) {
  switch (instruction?.toLowerCase()) {
    case "repeat":
      return <RepeatIcon {...props} />;
    case "reword":
      return <RewordIcon {...props} />;
    case "respond":
      return <RespondIcon {...props} />;
    default:
      return <></>;
  }
}

export function Card({
  focus,
  category,
  title,
  body,
  scripture,
  cardCount,
  instruction,
  color,
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
          className={`uppercase text-black bg-${color}`}
          style={{
            backgroundColor: theme.colors[color],
          }}
        >
          {category}
        </Badge>
      </div>

      <h3 className="text-3xl text-ocean">{title}</h3>

      <div className="flex items-center my-8">
        <InstructionIcon
          instruction={instruction}
          className="mr-4"
          width="36"
          height="36"
        />
        <Text as="p" size="3" className="text-olive">
          {!focus &&
            (instruction && instruction.length > 0
              ? instruction
              : "(No instructions)")}
        </Text>
      </div>

      <div
        className="p-4 rounded-md text-ocean"
        style={{
          backgroundColor: theme.colors[color],
        }}
      >
        {scripture && <p className="uppercase text-sm mb-4">{scripture}</p>}
        <p className="text-lg">{body}</p>
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
    </div>
  );
}
