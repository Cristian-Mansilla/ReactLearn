import { useRef, useState } from "react"

const Termostato = () => {

    const celsius = useRef();
    // const fahrenheit = useRef();
    const [fahrenheit, setFahrenheit] = useState(0);

    const convert = () => {
        const celsiusToFahrenheit = celsius.current.value*9/5+32;
        // fahrenheit.current.innerHTML = celsiusToFahrenheit;
        return setFahrenheit(celsiusToFahrenheit);
    }

    return <>
    <h2>Calculadora de Calsius a Fahrenheit</h2>
    <input onChange={celsius=>{setFahrenheit(celsius.target.value*9/5+32)}}/*ref={celsius}*/></input>
    <button disabled='true' onClick={convert}>Convertir</button>
    {/* <div ref={fahrenheit}></div> */}
    <div>{fahrenheit}</div>
    </>
}

export default Termostato;