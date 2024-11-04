import { useEffect } from "react";

export function useShowAfterScroll(
  callback: (satisfied: boolean) => void,
  scrollHeight: number = 200,
) {
  const handleScroll = () => callback(window.scrollY > scrollHeight);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return handleScroll;
}
