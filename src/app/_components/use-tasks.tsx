"use client";

import { useState, useEffect } from "react";
import { Task } from "@/components/task-card";

export function useTasks(key: string = "tasks") {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      try {
        setTasks(JSON.parse(storage));
      } catch {
        console.warn("Tarefas no localStorage inválidas");
      }
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [key, tasks]);

  function handlerAddOrUpdateTask() {
    if (!taskName.trim()) return;

    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id
            ? { ...t, name: taskName, description: taskDescription }
            : t
        )
      );
      setEditingTask(null);
    } else {
      const newTask: Task = {
        id: Date.now().toString(),
        name: taskName,
        description: taskDescription,
      };
      setTasks((prev) => [...prev, newTask]);
    }

    setTaskName("");
    setTaskDescription("");
  }

  function handleEditTask(task: Task) {
    setEditingTask(task);
    setTaskName(task.name);
    setTaskDescription(task.description ?? "");
  }

  function handleDeleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function handleToggleComplete(id: string, completed: boolean) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed } : t))
    );
  }

  return {
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
  };
}
