import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const initialItems = new Array(29_999_999).fill(0).map((_, index) => ({
  id: index,
  selectedItem: index === 29999998,
}))
