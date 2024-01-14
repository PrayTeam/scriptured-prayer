import { Badge, Text } from "@radix-ui/themes";

export interface UserCardProps {
  id: number;
  title: string;
  scripture: string;
  category: string;
  usercardnote_set: string[];
  answered: boolean;
  hidden: boolean;
  in_prayer_deck: boolean;
}

function UserCard(props: UserCardProps) {
  return (
    <div className="bg-gradient-to-bl from-lichen to-snowgrass h-50 py-12 px-16">
      <Badge
        color="jade"
        radius="small"
        size="2"
        mb="4"
        variant="soft"
        className="uppercase"
      >
        {props.category}
      </Badge>

      <h3 className="text-3xl pb-8">{props.title}</h3>

      <div className="border-l-8 border-lichen pl-4">
        <p className="text-lg">
          The LORD is my high ridge, my stronghold, my deliverer. My God is my
          rocky summit where I take shelter, my shield, the horn that saves me,
          and my refuge.
        </p>
        <p className="uppercase text-sm pt-4">{props.scripture}</p>
      </div>

      <Text color="jade" as="p" size="2" mt="8" className="">
        Give God glory or adoration that comes to mind.
      </Text>
    </div>
  );
}

export default UserCard;
