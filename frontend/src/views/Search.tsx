import { Container } from "~/components";
import { SearchIcon } from "~/components/Icons";

export function Search() {
  return (
    <Container>
      <div className="flex bg-gray p-4 rounded-full">
        <SearchIcon width="24" height="24" />
        <div className="ml-2 grow">
          <input
            type="text"
            className="bg-transparent w-full outline-none placeholder-stone"
            placeholder="Search topics, scripture, or prayers"
          />
        </div>
      </div>
    </Container>
  );
}
