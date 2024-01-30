import { Card, Heading } from "@radix-ui/themes";

import { PrayerDeckProps } from "../views/Discover";

const DeckCard = (props: PrayerDeckProps) => {
  return (
    <Card className="aspect-square max-w-72">
      <Heading> {props.title}</Heading>
    </Card>
  );
};

export default DeckCard;
