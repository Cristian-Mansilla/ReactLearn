import { useState } from "react";

const UseState = () => {
  const [contador, setContador] = useState(1);
  return (
    <>
    <h2>Uso de estado useState</h2>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        {contador}
      </button>
    </>
  );
};

export default UseState;
