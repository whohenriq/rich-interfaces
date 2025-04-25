import { Container } from "../container";
import { TaskCardHeader } from "./task-header";

interface TaskCardProps {
  taskName: string;
  taskDescription?: string;
}

export function TaskCard({ taskName, taskDescription }: TaskCardProps) {
  return (
    <Container className="flex flex-col gap-4 w-[450px] h-fit bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <TaskCardHeader taskName={taskName} />
      {taskDescription && (
        <p className="text-zinc-400 font-bold text-[14px]">{taskDescription}</p>
      )}
    </Container>
  );
}
