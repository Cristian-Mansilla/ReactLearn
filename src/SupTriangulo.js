import { useRef, useState } from "react";

const Superficie = () => {
  const ancho = useRef();
  const alto = useRef();
  // const superficie = useRef();
  const [superficie, setSuperficie] = useState();
  const calcularSuperficie = () => {
    const superficie = ancho.current.value * alto.current.value;
    // superficie.current.innerHTML = superficie;
    setSuperficie(superficie);
  };

  return (
    <>
      <h2>Calcular Superfice Triangulo</h2>
      <input ref={ancho}></input>
      <input ref={alto}></input>
      <button onClick={calcularSuperficie}>Calcular superficie</button>
      {/* <div ref={superficie}></div> */}
      <div>{superficie}</div>
    </>
  );
};

export default Superficie;
