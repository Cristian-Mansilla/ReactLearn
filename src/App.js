import Temp from "./components/Temp";
import { useState } from "react";

const App = () => {
  const titulo = <h1>Aprendiendo React</h1>;
  const btnAlert = () => {
    alert("Saluda React");
  };
 
  const [celsius, setCelsius] = useState(0);
  const celsiusToFahrenheit = (e) => { setCelsius(e.target.value) }
  const fahrenheit = celsius * 9/5+32;

  return (
    <>
      <div>{titulo}</div>
      <div>
        <button onClick={btnAlert}>Presioname</button>
      </div>
      
      <div>
        <input placeholder="Ingrese grados celsius" onChange={celsiusToFahrenheit}></input>
        <Temp fahrenheit={fahrenheit}/>
      </div>
    </>
  );
};

export default App;
