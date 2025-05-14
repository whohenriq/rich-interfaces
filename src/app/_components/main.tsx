"use client";

import { TaskCard } from "@/components/task-card";
import { TaskForm } from "@/components/task-form";
import { useTasks } from "./use-tasks";

export function MainContainer() {
  const {
    tasks,
    editingTask,
    taskName,
    taskDescription,
    setTaskName,
    setTaskDescription,
    handlerAddOrUpdateTask,
    handleEditTask,
    handleDeleteTask,
    handleToggleComplete,
  } = useTasks();
  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen w-full p-8 space-y-8">
      <div className="flex flex-col items-center gap-4 w-5xl h-fit">
        <h1 className="font-bold text-2xl text-zinc-900">Lista de Tarefas</h1>
        <TaskForm
          onClick={handlerAddOrUpdateTask}
          taskName={taskName}
          setTaskName={setTaskName}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          editing={!!editingTask}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => handleEditTask(task)}
            onDelete={() => handleDeleteTask(task.id)}
            onToggleComplete={(completed) =>
              handleToggleComplete(task.id, completed)
            }
          />
        ))}
      </div>
    </div>
  );
}
