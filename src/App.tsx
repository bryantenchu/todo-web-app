import Button from "./components/atoms/button/button";
import Input from "./components/atoms/input/input";

function App() {
  return (
    <>
      <Button onClick={() => console.log("va a agregar")}>Agregar</Button>
      <Button size="large" onClick={() => console.log("va a eliminar")}>
        Eliminar
      </Button>
      <Input
        value="test"
        name="addInput"
        onChange={() => console.log("esta tipeando...")}
        placeholder="Placeholder"
      />
      <Input
        value="test"
        name="addInput"
        onChange={() => console.log("esta tipeando...")}
        placeholder="Placeholder 2"
      />
    </>
  );
}

export default App;
