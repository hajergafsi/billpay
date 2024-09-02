import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { revalidatePath } from "next/cache";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isBrowser = () => typeof window !== "undefined";
