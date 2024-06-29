/**
 * Note: triggers transitive dependency imports.
 * See Tailwind documentation here: https://tailwindcss.com/docs/configuration#referencing-in-java-script
 * and more specifically the note on using https://github.com/kentcdodds/babel-plugin-preval
 */
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

export const { theme } = resolveConfig(tailwindConfig);
