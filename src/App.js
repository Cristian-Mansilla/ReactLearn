import { useState } from "react";
import RenderizadoCondicional from "./components/RederizadoCondicional";
import ComponenteMultiple from "./components/ComponenteMultiple";

const App = () => {
  const titulo = <h1>Aprendiendo React</h1>;
  const btnAlert = () => {
    alert("Saluda React");
  };

  const [noches, setNoches] = useState();

  return (
    <>
      <div>{titulo}</div>
      <div>
        <button onClick={btnAlert}>Presioname</button>
      </div>

      <div>
        <input onChange={(e)=>setNoches(e.target.value)}></input>
        <ComponenteMultiple option={1} noches={noches}/>
        <ComponenteMultiple option={2} noches={noches}/>
      </div>
    </>
  );
};

export default App;
