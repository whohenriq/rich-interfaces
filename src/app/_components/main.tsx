import { TaskCard } from "@/components/task-card";
import { TaskForm } from "@/components/task-form";

export function MainContainer() {
  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen w-full p-8 space-y-8">
      <div className="flex flex-col items-center gap-4 w-5xl h-fit">
        <h1 className="font-bold text-2xl text-zinc-900">Lista de Tarefas</h1>
        <TaskForm />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <TaskCard
          taskName="Exemplo de tarefa"
          taskDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, est."
        />
        <TaskCard
          taskName="Exemplo de tarefa"
          taskDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, est."
        />
      </div>
    </div>
  );
}
