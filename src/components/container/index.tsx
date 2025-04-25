import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-center w-fit h-fit ",
        className
      )}
    >
      {children}
    </div>
  );
}
