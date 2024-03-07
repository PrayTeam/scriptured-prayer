import { Badge, Text } from "@radix-ui/themes";
import { CategoryResponse } from "~/api/models/responses";

export function FocusCard(props: CategoryResponse) {
  if (!props) {
    return <div>ERROR: No category found.</div>;
  } else {
    return (
      <div className="bg-snowgrass h-50 py-8 md:py-12 px-6 md:px-16 rounded-md">
        <Badge
          radius="small"
          size="2"
          mb="4"
          variant="soft"
          className="uppercase text-white bg-ocean/50"
        >
          {props.name}
        </Badge>

        <h3 className="text-3xl pb-8 text-ocean">Inspiration</h3>

        <div className="text-ocean">
          <p className="text-lg">{props.inspiration}</p>
          <Badge
            radius="small"
            size="1"
            mt="6"
            variant="soft"
            className="text-ocean bg-ocean/25"
          >
            {props.card_count} cards
          </Badge>
        </div>

        <Text as="p" size="2" mt="8" className="text-olive text-center">
          {props.default_instruction}
        </Text>
      </div>
    );
  }
}
