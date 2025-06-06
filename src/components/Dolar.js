import { useRef, useState } from "react";
const Dolar = () => {
    const euro = useRef();
    const [dolar, setDolar] = useState(0);
    // const dolar = useRef();
  
    const convert = () => {
        // return (dolar.current.innerHTML = euro.current.value * 2);
        const euroToDolar = euro.current.value * 2;
      return (setDolar(euroToDolar));
    };
  
    return (
      <div>
        <h2>Calculadora de Euro a Dolar</h2>
        <label>
          euro:<input onChange={(euro)=>{setDolar(euro.target.value*2)}} type="text" /*</label>ref={euro}*/></input>
        </label>
        <button disabled='true' onClick={convert}>Enviar</button>
        <div>
          <label>
            {/* dolar:<div ref={dolar}></div> */}
            dolar:<p>{dolar}</p>
          </label>
        </div>
      </div>
    );
  };

export default Dolar;