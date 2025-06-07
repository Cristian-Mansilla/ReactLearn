import Dolar from "./components/Dolar";
import ChangeImage from "./components/Imagen";
import Superficie from "./components/SupTriangulo";
import Termostato from "./components/Termostato";
import Estados from "./components/Estados";
import Box from "./components/Box";
import Post from "./components/Post";
import Dollars from "./components/Dollar";
import { useState } from "react";

const App = () => {
  const titulo = <h1>Aprendiendo React</h1>;
  const btnAlert = () => {
    alert("Saluda React");
  };
  
  const [euro,setEuro] = useState(0);
  const handlerDollar = (e) => { setEuro(e.target.value) }
  const dollars = euro * 2;

  return (
    <>
      <div>{titulo}</div>
      <div>
        <button onClick={btnAlert}>Presioname</button>
      </div>
      <div>
        <input placeholder="Euro" onChange={handlerDollar}></input>
        <Dollars amount={dollars}/>
      </div>
    </>
  );
};

export default App;
