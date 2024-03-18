import { Badge, Text } from "@radix-ui/themes";
import { CardResponse, CategoryResponse } from "~/api/models/responses";

export function Card(props: CardResponse | CategoryResponse) {
  return (
    <div
      className={`h-50 py-8 md:py-12 px-6 md:px-16 rounded-md ${"inspiration" in props ? "bg-snowgrass" : "bg-white"}`}
    >
      <Badge
        radius="small"
        size="2"
        mb="4"
        variant="soft"
        className={`uppercase ${"inspiration" in props ? "text-white bg-ocean/50" : "text-ocean bg-gray"}`}
      >
        {"inspiration" in props ? props.name : props.category}
      </Badge>

      <h3 className="text-3xl pb-8 text-ocean">
        {"inspiration" in props ? "Inspiration" : props.title}
      </h3>

      <div
        className={`text-ocean ${"scripture_text" in props && "border-l-8 border-ocean pl-4"}`}
      >
        <p className="text-lg">
          {"inspiration" in props
            ? props.inspiration
            : props.scripture_text.map((st) => st.text).join(" ")}
        </p>
        <p className="uppercase text-sm pt-4">
          {"scripture" in props && props.scripture}
        </p>
        {"inspiration" in props && (
          <Badge
            radius="small"
            size="1"
            mt="4"
            variant="soft"
            className="text-ocean bg-ocean/25"
          >
            {props.card_count} cards
          </Badge>
        )}
      </div>

      <Text as="p" size="2" mt="8" className="text-olive text-center">
        {"instruction" in props &&
          (props.instruction.length > 0
            ? props.instruction
            : "(No instructions)")}
      </Text>
    </div>
  );
}
