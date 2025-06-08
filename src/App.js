import { useState } from "react";
import RenderizadoCondicional from "./components/RederizadoCondicional";
import ComponenteMultiple from "./components/ComponenteMultiple";

const App = () => {
  const titulo = <h1>Aprendiendo React</h1>;
  const btnAlert = () => {
    alert("Saluda React");
  };

  const [dato1, setDato1] = useState();
  const [dato2, setDato2] = useState();

  return (
    <>
      <div>{titulo}</div>
      <div>
        <button onClick={btnAlert}>Presioname</button>
      </div>

      <div>
        <input onChange={(e)=>setDato1(e.target.value)}></input>
        <input onChange={(e)=>setDato2(e.target.value)}></input>
        <ComponenteMultiple option={1} dato1={dato1}/>
        <ComponenteMultiple option={2} dato1={dato1}/>
        <ComponenteMultiple option={3} dato1={dato1} dato2={dato2}/>
      </div>
    </>
  );
};

export default App;
