"use client";

import { useState } from "react";
import { TaskCard } from "@/components/task-card";
import { TaskForm } from "@/components/task-form";

export function MainContainer() {
  const [tasks, setTasks] = useState([
    {
      name: "Exemplo de tarefa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, est.",
    },
    {
      name: "Exemplo de tarefa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, est.",
    },
  ]);

  const handleAddTask = () => {
    const newTask = {
      name: "Nova tarefa",
      description: "Descrição da nova tarefa",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen w-full p-8 space-y-8">
      <div className="flex flex-col items-center gap-4 w-5xl h-fit">
        <h1 className="font-bold text-2xl text-zinc-900">Lista de Tarefas</h1>
        <TaskForm onClick={handleAddTask} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            taskName={task.name}
            taskDescription={task.description}
          />
        ))}
      </div>
    </div>
  );
}
