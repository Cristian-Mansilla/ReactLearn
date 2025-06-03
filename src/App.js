import { useRef } from "react";

const App = () => {
  
  const nombreRef = useRef();
  const resultadoRef = useRef();

  const procesar = () => {
    resultadoRef.current.innerHTML = nombreRef.current.value;
  }

  return <div>
    <input type="text" ref={nombreRef}></input>
    <botton onClick={procesar}>Enviar</botton>
    <div ref={resultadoRef}></div>
  </div>

};

export default App;
