import { useEffect } from "react";
import { useParams } from "react-router-dom";

const validateId = (id: string | undefined) =>
  !id || isNaN(+id) || +id < 1 ? null : +id;

export function useRouteId() {
  const { id } = useParams();
  const parsed = validateId(id);

  useEffect(() => {
    if (!parsed) console.error("An id was not provided.");
  }, [parsed]);

  return parsed;
}
