import { Badge, Text } from "@radix-ui/themes";
import { CardResponse } from "~/api/models/responses";

export function Card(props: CardResponse) {
  return (
    <div className="bg-white py-8 md:py-12 px-6 md:px-16 my-8 rounded-md min-h-[500px]">
      <Badge
        radius="small"
        size="2"
        mb="4"
        variant="soft"
        className="uppercase text-ocean bg-gray"
      >
        {props.category}
      </Badge>

      <h3 className="text-3xl pb-8 text-ocean">{props.title}</h3>

      <div className="border-l-8 border-ocean pl-4 text-ocean">
        <p className="text-lg">
          {props.scripture_text.map((st) => st.text).join(" ")}
        </p>
        <p className="uppercase text-sm pt-4">{props.scripture}</p>
      </div>

      <Text as="p" size="2" mt="8" className="text-olive text-center">
        {props.instruction.length > 0 ? props.instruction : "(No instructions)"}
      </Text>
    </div>
  );
}
