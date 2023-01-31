import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
      <h1>Contador</h1>
      <h1>{contador}</h1>
      <div className="colum">
        <button className="button button-red" onClick={() => setContador(contador - 1)}>Restar -</button>
        <button  className="button button-gray"  onClick={() => setContador(0)}>Resetear 0 </button>
        <button className="button button-blue"  onClick={() => setContador(contador + 1)}> Sumar +</button>
      </div>
    </div>
  );
}

export default App;
