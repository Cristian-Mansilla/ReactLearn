import { useRef } from "react";

const App = () => {
  const euro = useRef();
  const dolar = useRef();

  const convert = () => {
    return (dolar.current.innerHTML = euro.current.value * 2);
  };

  return (
    <div>
      <h2>Calculadora de Euro a Dolar</h2>
      <label>
        euro:<input type="text" ref={euro}></input>
      </label>
      <button onClick={convert}>Enviar</button>
      <div>
        <label>
          dolar:<div ref={dolar}></div>
        </label>
      </div>
    </div>
  );
};

// const App = () => {
//   const titulo = <h1>Aprendiendo React</h1>;
//   const btnAlert = () => {
//     alert("Saluda React");
//   };
//   const array = [1, 2, 3, 4, 5];
//   return (
//     <>
//       <div>
//         {titulo}
//       </div>
//       <div>
//         {array.map((elem,key)=>{
//           return <p key={key}>{elem}</p>
//         })}
//       </div>
//       <div>
//         <button onClick={btnAlert}>Presioname</button>
//       </div>
//     </>
//   );
// };

export default App;
