import { Badge, Text} from "@radix-ui/themes";
import { UserCardProps } from "./PrayerDeck";
interface Props {
  usercard: UserCardProps;
}

const UserCard = ({ usercard }: Props) => {
  return (
    <div className="bg-gradient-to-bl from-teal-200 to-lime-200 h-50 py-12 px-16">

      {/* <p className="text-base font-light uppercase pb-4">Names of God</p> */}
      <Badge color="jade" 
        radius="small"
        size="2" 
        mb="4"
        variant="soft"
        className="uppercase"> 
        {usercard.category}
      </Badge>

      <h3 className='text-3xl pb-8'>{usercard.title}</h3>

      <div className="border-l-8 border-teal-600 pl-4">
        <p className="text-lg ">
          The LORD is my high ridge, my stronghold, my deliverer. My God is my
          rocky summit where I take shelter, my shield, the horn that saves me,
          and my refuge.
        </p>
        <p className="uppercase text-sm pt-4">{usercard.scripture}</p>
      </div>


      <Text color="jade"
        as="p"
        size="2"
        mt="8"
        className="">
        Give God glory or adoration that comes to mind.
        </Text>

    </div>
  );
};

export default UserCard;
