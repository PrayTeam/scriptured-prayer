import { Container } from "~/components";
import { TextSearch } from "~/components/form";

export function Search() {
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <Container>
      <TextSearch
        onChange={onSearchChange}
        placeholder="Search topics, scripture, or prayers"
      />
    </Container>
  );
}
