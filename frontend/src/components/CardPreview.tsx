import { useState } from "react";

import { UserCardResponse } from "~/api/models/responses";
import { theme } from "~/tailwind.config";
import { deckColors } from "~/utilities";

interface CardPreviewProps extends UserCardResponse {
  onClick?: () => void;
}

export function CardPreview(props: CardPreviewProps) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (!props.onClick) return;
    setSelected(!selected);
    props.onClick();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: theme.colors[deckColors[props.category_id % 6]],
      }}
      className={`flex flex-col w-full mb-4 rounded-xl text-white cursor-pointer p-4 transition-all ${selected ? "opacity-50" : ""} ${props.onClick ? "active:scale-95 ease-out duration-75" : ""}`}
    >
      <div className="text-xs font-bold uppercase mb-2">{props.category}</div>
      <div>{props.title}</div>
      <div className="text-sm uppercase mt-2">{props.scripture}</div>
    </div>
  );
}
