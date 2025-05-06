"use client";

import { useState } from "react";
import { Task, TaskCard } from "@/components/task-card";
import { TaskForm } from "@/components/task-form";

export function MainContainer() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      name: "Exemplo de tarefa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, est.",
    },
    {
      id: "2",
      name: "Exemplo de tarefa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, est.",
    },
  ]);

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (!taskName.trim()) return;

    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, name: taskName, description: taskDescription }
            : task
        )
      );
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now().toString(),
        name: taskName,
        description: taskDescription,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    setTaskName("");
    setTaskDescription("");
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setTaskName(task.name);
    setTaskDescription(task.description!);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id: string, completed: boolean) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed } : task))
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen w-full p-8 space-y-8">
      <div className="flex flex-col items-center gap-4 w-5xl h-fit">
        <h1 className="font-bold text-2xl text-zinc-900">Lista de Tarefas</h1>
        <TaskForm
          onClick={handleAddTask}
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
