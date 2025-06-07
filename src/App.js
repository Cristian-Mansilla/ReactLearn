import { useState } from "react";
import Area from "./components/Area";
const App = () => {
  const titulo = <h1>Aprendiendo React</h1>;
  const btnAlert = () => {
    alert("Saluda React");
  };

  const [alto, setAlto] = useState(0);
  const [ancho, setAncho] = useState(0);
  const handleAlto = (e) => { setAlto(e.target.value) }
  const handleAncho = (e) => { setAncho(e.target.value) }
  const superficie = alto * ancho;

  return (
    <>
      <div>{titulo}</div>
      <div>
        <button onClick={btnAlert}>Presioname</button>
      </div>

      <div>
        <input placeholder="Alto" onChange={handleAlto}></input>
        <input placeholder="Ancho" onChange={handleAncho}></input>
        <Area superficie={superficie}></Area>
      </div>
    </>
  );
};

export default App;
