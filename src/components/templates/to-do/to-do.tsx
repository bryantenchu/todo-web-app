import Button from "../../atoms/button/button";
import Counter from "../../atoms/counter/counter";
import Input from "../../atoms/input/input";
import TasksList from "../../organisms/tasks-list/tasks-list";
import "./to-do.scss";

const ToDo = () => {
  return (
    <div className="to-do">
      <h1 className="to-do__title">TODO LIST</h1>
      <div className="to-do__header">
        <Input
          value={""}
          name="addTask"
          onChange={() => {
            console.log("va a guardar");
          }}
          placeholder="Título"
        />
        <Button onClick={() => console.log("va a agregar")}>Agregar</Button>
      </div>

      <TasksList
        tasks={[
          { id: 1, isCompleted: false, title: "Tarea 1" },
          { id: 1, isCompleted: false, title: "Tarea 1" },
          { id: 1, isCompleted: false, title: "Tarea 1" },
        ]}
      />
      <div className="to-do__counter">
        <Counter completedTasks={0} totalTasks={0} />
      </div>
    </div>
  );
};

export default ToDo;
