import { Task } from "./../../../utils/interfaces/task";
import { useState } from "react";

const useTodo = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [completedTasksList, setCompletedTasksList] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 200),
      title: title,
    };
    setTasksList([...tasksList, newTask]);
  };

  const deleteTask = (id: number) => {};

  const completeTask = (id: number) => {};

  return {
    tasksList,
    completedTasksList,
    addTask,
    deleteTask,
    completeTask,
  };
};

export default useTodo;
