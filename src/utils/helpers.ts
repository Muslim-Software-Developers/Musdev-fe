import { AxiosError } from "axios";

export const cn = (defaultClasses: string, newClassName?: string) => {
  return newClassName ? `${defaultClasses} ${newClassName}` : defaultClasses;
};

export function extractAxiosError(error: unknown): string {
  return (error as AxiosError<{ message: string }>).response?.data?.message!;
}
