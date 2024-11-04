import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { UserCardResponse } from "~/api/models/responses";
import {
  CardPreview,
  Container,
  Jump,
  Loader,
  NestedScreen,
  Modal,
} from "~/components";
import { Button, TextSearch } from "~/components/form";
import {
  useApi,
  useDebounce,
  useScreenBreak,
  useShowAfterScroll,
} from "~/hooks";
import { CreateDailyDeck } from "./CreateDailyDeck";

interface ExpandProps extends React.ComponentPropsWithRef<"div"> {}

export function Expand(props: ExpandProps) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      {props.children}
    </div>
  );
}

export function EditDailyDeck() {
  const api = useApi();
  const action = "Create"; // todo
  const { breakMd } = useScreenBreak();
  const [lastSearch, setLastSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<UserCardResponse[]>([]);
  const [selectedCards, setSelectedCards] = useState<
    Record<number, UserCardResponse | undefined>
  >({});
  const [showJumpButton, setShowJumpButton] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const selectedCardsEntries = Object.entries(selectedCards)
    .filter(([, value]) => value)
    .map(([, value]) => value) as UserCardResponse[];
  const debouncedSearch = useDebounce(lastSearch);
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLastSearch(event.target.value);
  const scrollResult = useShowAfterScroll(setShowJumpButton);

  useEffect(() => {
    window.addEventListener("scroll", scrollResult);
    return () => window.removeEventListener("scroll", scrollResult);
  }, []);

  useEffect(() => {
    if (debouncedSearch) {
      setLoading(true);
      (async () => {
        api.userCards
          .all({ search: debouncedSearch })
          .then((cards) => {
            setResults(cards.filter((c) => !selectedCards[c.id]));
          })
          .catch((error) => console.error(error))
          .finally(() => {
            setLoading(false);
            setHasSearched(true);
          });
      })();
    }
  }, [debouncedSearch]);

  const addCard = (card: UserCardResponse) =>
    setSelectedCards({
      ...selectedCards,
      [card.id]: selectedCards[card.id] ? undefined : card,
    });

  return (
    <>
      <Modal.Root>
        {createPortal(
          <Modal.Container>
            <CreateDailyDeck selectedCardsEntries={selectedCardsEntries} />
          </Modal.Container>,
          document.body,
        )}
        <NestedScreen title={`${action} Daily Deck`}>
          <Container className="h-full">
            {breakMd && (
              <div className="flex gap-4 items-center mb-4">
                <h1 className="text-2xl text-black font-black">
                  {action} Daily Deck
                </h1>
              </div>
            )}
            <div className="flex flex-col h-full">
              <TextSearch
                onChange={onSearchChange}
                placeholder="Search all cards"
              />
              <div className="mt-4 mb-7 w-full h-full">
                {loading ? (
                  <Expand children={<Loader className="animate-spin" />} />
                ) : results.length > 0 ? (
                  results.map((r, i) => (
                    <CardPreview key={i} onClick={() => addCard(r)} {...r} />
                  ))
                ) : (
                  <Expand
                    children={
                      hasSearched ? "No results." : "Search for anything"
                    }
                  />
                )}
              </div>
            </div>
          </Container>
          <div
            className={`w-full fixed px-2 transition ease-out duration-150 bottom-0 ${selectedCardsEntries.length > 0 ? "" : "translate-y-full"}`}
          >
            {showJumpButton && (
              <div className="relative max-w-screen-xl mx-auto">
                <Jump className="absolute right-0 -top-2 -translate-y-full" />
              </div>
            )}
            <div className="flex justify-between items-center max-w-screen-xl mx-auto bg-ghost rounded-t-xl border-t border-x border-gray p-4">
              <div className="">{selectedCardsEntries.length} selected</div>
              <Modal.Trigger>
                {({ toggle }) => (
                  <Button className="bg-sky max-w-[200px]" onClick={toggle}>
                    REVIEW
                  </Button>
                )}
              </Modal.Trigger>
            </div>
          </div>
        </NestedScreen>
      </Modal.Root>
    </>
  );
}
