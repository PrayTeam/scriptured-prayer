import { useWindowDimensions } from "./useWindowDimensions";

import { theme } from "~/tailwind.config";

const screens: Record<string, number> = Object.entries(theme.screens)
  .map(([key, value]) => ({ [key]: +value.split("px")[0] }))
  .reduce((acc, curr) => ({ ...acc, ...curr }));

export function useScreenBreak() {
  const { width } = useWindowDimensions();

  return {
    breakSm: width > screens.sm,
    breakMd: width > screens.md,
    breakLg: width > screens.lg,
    breakXl: width > screens.xl,
    break2xl: width > screens["2xl"],
  };
}
