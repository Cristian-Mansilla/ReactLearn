import { useRef } from "react";

const Superficie = () => {
  const ancho = useRef();
  const alto = useRef();
  const superficie = useRef();
  const calcularSuperficie = () => {
    superficie.current.innerHTML = ancho.current.value * alto.current.value;
    return superficie;
  };

  return (
    <>
      <h2>Calcular Superfice Triangulo</h2>
      <input ref={ancho}></input>
      <input ref={alto}></input>
      <button onClick={calcularSuperficie}>Calcular superficie</button>
      <div ref={superficie}></div>
    </>
  );
};

export default Superficie;
