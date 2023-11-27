import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

function App() {
  return (
    <div className="App">
      <Form />
      <CardFront />
      <CardBack />
    </div>
  );
}

export default App;
