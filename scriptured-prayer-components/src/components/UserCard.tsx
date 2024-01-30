import { FaceIcon } from "@radix-ui/react-icons";
import { Badge, Text } from "@radix-ui/themes";

export interface ScriptureText {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface UserCardProps {
  id: number;
  title: string;
  scripture: string;
  version: string;
  scripture_text: ScriptureText[];
  category: string;
  genre: string;
  usercardnote_set: string[];
  answered: boolean;
  hidden: boolean;
  in_prayer_deck: boolean;
  last_prayed: Date;
}

function UserCard(props: UserCardProps) {
  return (
    <div className="bg-gradient-to-bl from-lichen to-snowgrass h-50 py-12 px-16">
      <div className="flex justify-between">
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

        <Badge
          color="jade"
          radius="small"
          size="2"
          mb="4"
          variant="outline"
          className="uppercase"
        >
          <FaceIcon />
          {props.genre}
        </Badge>
      </div>

      <h3 className="text-3xl pb-8">{props.title}</h3>

      <div className="border-l-8 border-lichen pl-4">
        <p className="text-lg">
          {/* {props.scripture_text[0] && props.scripture_text[0].text} */}
          {props.scripture_text.map((s) => s.text).join(" ")}
        </p>
        <p className="uppercase text-sm pt-4">
          {" "}
          {props.scripture} <span>({props.version})</span>
        </p>
      </div>

      <Text color="jade" as="p" size="2" mt="8" className="">
        Give God glory or adoration that comes to mind.
      </Text>
    </div>
  );
}

export default UserCard;
