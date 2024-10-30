import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, "");

  if (cleaned.startsWith("63")) {
    return `+63 ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(
      8
    )}`;
  } else if (cleaned.startsWith("0")) {
    return `(0${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)} ${cleaned.slice(
      7
    )}`;
  } else if (cleaned.startsWith("+63")) {
    return `+63 ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(
      9
    )}`;
  }
  return phone;
}
