import { Container } from "../container";
import { TaskCardHeader } from "./task-header";

export interface Task {
  id: string;
  name: string;
  description?: string;
  completed?: boolean;
}

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onToggleComplete: (completed: boolean) => void;
}

export function TaskCard({
  task,
  onEdit,
  onDelete,
  onToggleComplete,
}: TaskCardProps) {
  return (
    <Container
      className={`flex flex-col gap-4 w-full max-w-[450px] h-fit bg-white p-4 rounded-lg shadow-md border ${
        task.completed ? "border-green-200 bg-green-50" : "border-gray-200"
      }`}
    >
      <TaskCardHeader
        taskName={task.name}
        completed={task.completed}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
      />
      {task.description && (
        <p
          className={`text-[14px] font-bold ${
            task.completed ? "text-gray-400 line-through" : "text-zinc-400"
          }`}
        >
          {task.description}
        </p>
      )}
    </Container>
  );
}
