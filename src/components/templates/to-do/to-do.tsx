import { useTodoContex } from "../../../context/todo-context/todo-context";
import Button from "../../atoms/button/button";
import Counter from "../../atoms/counter/counter";
import Input from "../../atoms/input/input";
import TasksList from "../../organisms/tasks-list/tasks-list";
import "./to-do.scss";
import useAddTask from "./use-add-task/use-add-task";

const ToDo = () => {
  const { tasksList, completedTasksList, addTask } = useTodoContex();
  const { title, handleChangeTitle, setTitle } = useAddTask();

  return (
    <div className="to-do">
      <h1 className="to-do__title">TODO LIST</h1>
      <div className="to-do__header">
        <Input
          value={title}
          name="addTask"
          onChange={handleChangeTitle}
          placeholder="Título"
        />
        <Button
          onClick={() => {
            addTask(title);
            setTitle("");
          }}
        >
          Agregar
        </Button>
      </div>

      <TasksList tasks={tasksList} />
      <div className="to-do__counter">
        <Counter
          completedTasks={completedTasksList.length}
          totalTasks={tasksList.length}
        />
      </div>
    </div>
  );
};

export default ToDo;
