import { Edit, Trash } from "lucide-react";
import { CustomButton } from "../custom-button";

interface TaskCardHeaderProps {
  taskName: string;
  completed?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onToggleComplete?: (completed: boolean) => void;
}

export function TaskCardHeader({
  taskName,
  completed = false,
  onEdit,
  onDelete,
  onToggleComplete,
}: TaskCardHeaderProps) {
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onToggleComplete) {
      onToggleComplete(e.target.checked);
    }
  };

  return (
    <div className="flex items-center justify-between w-full h-fit">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-6 h-6 cursor-pointer"
          checked={completed}
          onChange={handleToggle}
        />
        <h4
          className={`text-black font-bold text-xl ${
            completed ? "line-through text-gray-400" : ""
          }`}
        >
          {taskName}
        </h4>
      </div>

      <div className="flex items-center gap-1">
        {onEdit && (
          <CustomButton
            onClick={onEdit}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Edit size={20} className="text-gray-900" />
          </CustomButton>
        )}
        {onDelete && (
          <CustomButton
            onClick={onDelete}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Trash size={20} className="text-gray-900" />
          </CustomButton>
        )}
      </div>
    </div>
  );
}
