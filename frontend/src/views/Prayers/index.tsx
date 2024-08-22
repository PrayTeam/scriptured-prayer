import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, PlusIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { useArray } from "~/hooks";
import { Container } from "~/components";
import { Button } from "~/components/form";
import { theme } from "~/tailwind.config";

interface PrayerRequest {
	id: number;
	petitioner: number;
	for: string;
	description: string;
	created: Date;
}

interface PrayerPreviewProps {
	index: number;
	request: PrayerRequest;
}

const prayerColors: (keyof typeof theme.colors)[] = [
  "lichen",
	"olive",
	"leaf",
	"ocean",
];

function PrayerPreview({ index, request }: PrayerPreviewProps) {
  const navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/prayers/${request.id}`)}
			className={`cursor-pointer bg-${prayerColors[index % 4]} rounded-lg p-4 text-white mb-4 md:max-w-[500px] flex justify-between items-center`}
		>
			<div>
				<h2 className="text-lg font-semibold">{request.for}</h2>
				<div>{format(request.created, "MMMM do yyyy")}</div>
			</div>
			<div>
				<ArrowRightIcon width="24" height="24" />
			</div>
		</div>
	)
}

export * from "./PrayerDetail";

export function Prayers() {
	const {array: prayers, push} = useArray<PrayerRequest>([]);

	const addPrayer = () => {
		// todo: retrieve from backend response
		push({
			id: prayers.length + 1,
			petitioner: 1,
			for: 'Kenan Casey',
			description: 'Lorem ipsum dolor sit amet',
			created: new Date(),
		});
	}

	return (
		<Container>
			<h1 className="text-3xl mb-4">Prayer Requests</h1>
			{prayers.map((p, i) => <PrayerPreview key={i} index={i} request={p} />)}
			<div className="flex-1 md:max-w-[200px]">
				<Button onClick={addPrayer} className="flex justify-center">
					<PlusIcon width="24" height="24" className="mr-2" />
					Add Request
				</Button>
			</div>
		</Container>
	);
}
