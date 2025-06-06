import { useState } from "react";

const UseState = () => {
  const [contador, setContador] = useState(1);
  const [value, setValue] = useState();
  return (
    <>
      <h2>Uso de estado useState</h2>
      <input onChange={(e) => setValue(e.target.value)}></input>
      <span>{value}</span>
      <div>
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          {contador}
        </button>
      </div>
    </>
  );
};

export default UseState;
