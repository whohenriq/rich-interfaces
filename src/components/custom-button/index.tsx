import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CustomButton({
  children,
  icon,
  onClick,
  className,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center p-4 w-full h-11 text-center gap-1 cursor-pointer",
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
}
