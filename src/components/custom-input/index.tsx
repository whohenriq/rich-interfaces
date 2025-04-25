import { cn } from "@/lib/utils";

interface CustomInputProps {
  placeholder?: string;
  className?: string;
}

export function CustomInput({ placeholder, className }: CustomInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={cn([
        "w-full h-11 rounded-md border-2 border-neutral-300 p-2 placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
        className,
      ])}
    />
  );
}
