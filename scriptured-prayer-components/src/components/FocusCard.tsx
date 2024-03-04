import { Badge, Text } from "@radix-ui/themes";
import { CategoryResponse } from "~/api/models/responses";

export function FocusCard(props: CategoryResponse) {
  return (
    <div className="bg-white h-50 py-8 md:py-12 px-6 md:px-16 rounded-md">
      <Badge
        radius="small"
        size="2"
        mb="4"
        variant="soft"
        className="uppercase text-ocean bg-gray"
      >
        {props.name}
      </Badge>

      <h3 className="text-3xl pb-8 text-ocean">{props.genre}</h3>

      <div className="border-l-8 border-ocean pl-4 text-ocean">
        <p className="text-lg">{props.card_count}</p>
        <p className="uppercase text-sm pt-4">{props.inspiration}</p>
      </div>

      <Text as="p" size="2" mt="8" className="text-olive text-center">
        {props.default_instruction.length > 0
          ? props.default_instruction
          : "(No instructions)"}
      </Text>
    </div>
  );
}
