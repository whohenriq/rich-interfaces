import { Edit, Trash } from "lucide-react";
import { CustomButton } from "../custom-button";

interface TaskCardHeaderProps {
  taskName: string;
}

export function TaskCardHeader({ taskName }: TaskCardHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full h-fit">
      <div className="flex items-center gap-2">
        <input type="checkbox" className="w-6 h-6" />
        <h4 className="text-black font-bold text-xl">{taskName}</h4>
      </div>

      <div className="flex items-center gap-1">
        <CustomButton>
          <Edit size={20} className="text-gray-900" />
        </CustomButton>
        <CustomButton>
          <Trash size={20} className="text-gray-900" />
        </CustomButton>
      </div>
    </div>
  );
}
