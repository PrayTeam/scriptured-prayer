import { SearchIcon } from "../Icons";

interface TextSearchProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextSearch(props: TextSearchProps) {
  return (
    <div className="flex bg-gray p-4 rounded-full">
      <SearchIcon width="24" height="24" />
      <div className="ml-2 grow">
        <input
          type="text"
          className="bg-transparent w-full outline-none placeholder-stone"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
