import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { Container } from "~/components";
import { AddIcon, RightArrowIcon } from "~/components/Icons";
import { useArray } from "~/hooks";
import { theme } from "~/tailwind.config";
import { categoryColors } from "~/utilities";

interface PrayerRequest {
  id: number;
  petitionerId: number;
  for: string;
  description: string;
  deadline?: Date;
}

interface PrayerRequestPreviewProps extends PrayerRequest {
  color: keyof typeof theme.colors;
}

function PrayerRequestPreview(props: PrayerRequestPreviewProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/prayers/${props.id}`)}
      style={{ backgroundColor: theme.colors[props.color] }}
      className="flex flex-row items-center w-full mb-4 rounded-xl text-white p-6 cursor-pointer"
    >
      <div className="flex flex-col grow">
        <div className="flex">
          <div className="mr-1">{props.for}</div>
          {props.deadline && (
            <div className="italic text-gray">
              by {format(props.deadline, "MM/dd")}
            </div>
          )}
        </div>
        <div>{props.description}</div>
      </div>
      <RightArrowIcon width="24" height="24" />
    </div>
  );
}

const mockPrayerRequests: PrayerRequest[] = [
  {
    id: 1,
    petitionerId: 1,
    for: "Ben Clark",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    petitionerId: 1,
    for: "Kenan Casey",
    deadline: new Date(),
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    petitionerId: 1,
    for: "Robbie Nichols",
    description: "Lorem ipsum dolor sit amet",
  },
];

export * from "./PrayerRequestDetail";

export function Prayers() {
  const { array: prayerRequests, push: pushPrayerRequest } =
    useArray<PrayerRequest>(mockPrayerRequests);

  // todo: move to the backend
  const addMock = () => {
    pushPrayerRequest({
      id: prayerRequests.length + 1,
      petitionerId: 1,
      for: "Asher Lloyd",
      description: "Lorem ipsum dolor sit amet",
    });
  };

  return (
    <Container>
      <h1 className="text-2xl text-black font-black mb-4">Prayer Requests</h1>
      {prayerRequests.map((pr, i) => (
        <PrayerRequestPreview key={i} color={categoryColors[i % 6]} {...pr} />
      ))}
      <div className="flex w-full justify-center py-4">
        <div className="flex flex-col justify-center text-center">
          <div
            onClick={() => addMock()}
            className="flex self-center justify-center items-center bg-lichen rounded-full w-[40px] h-[40px] text-white cursor-pointer"
          >
            <AddIcon width="24" height="24" />
          </div>
          <div className="text-lichen text-sm my-2">Add Requests</div>
        </div>
      </div>
    </Container>
  );
}
