import Button from "./components/atoms/button/button";
import Checkbox from "./components/atoms/checkbox/checkbox";
import ToDo from "./components/templates/to-do/to-do";
import { TodoProvider } from "./context/todo-context/todo-context";

function App() {
  return (
    <TodoProvider>
      <ToDo />
    </TodoProvider>
  );
}

export default App;
