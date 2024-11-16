import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge.
 * @param {...(string|object|Array|undefined)} inputs - Accepts strings, objects, arrays, or undefined values as class names.
 * @returns {string} - The combined and merged class name string.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
