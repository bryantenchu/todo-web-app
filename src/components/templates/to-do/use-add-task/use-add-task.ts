import { useState } from "react";

const useAddTask = () => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  return { title, handleChangeTitle, setTitle };
};

export default useAddTask;
