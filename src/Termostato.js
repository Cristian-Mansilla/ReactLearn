import { useRef } from "react"

const Termostato = () => {

    const celsius = useRef();
    const fahrenheit = useRef();

    const convert = () => {
        fahrenheit.current.innerHTML = celsius.current.value*9/5+32
    }

    return <>
    <h2>Calculadora de Calsius a Fahrenheit</h2>
    <input ref={celsius}></input>
    <button onClick={convert}>Convertir</button>
    <div ref={fahrenheit}></div>
    </>
}

export default Termostato;