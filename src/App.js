import { useRef } from "react";

const App = () => {
  const euro = useRef();
  const dolar = useRef();

  const convert = () => {
    dolar.current.innerHTML = euro.current.value * 2;
  };

  return (
    <div>
      <label>
        euro:<input type="text" ref={euro}></input>
      </label>
      <div>
        <botton onClick={convert}>Enviar</botton>
      </div>
      <label>
        dolar:<div ref={dolar}></div>
      </label>
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
