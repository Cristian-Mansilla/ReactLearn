import { useState } from "react";
// import "../styles/Dolars.css";

const Dollars = ({ amount }) => {
  const [euro, setEuro] = useState(0);
  const handlerDollar = (e) => {
    setEuro(e.target.value);
  };
  const dollars = euro * 2;

  return (
    <div>
      <div>
        <input placeholder="Euro" onChange={handlerDollar}></input>
        {/* <Dollars amount={dollars} /> */}
      </div>

      <p>Cantidad de dolares {dollars}</p>
    </div>
  );
};
export default Dollars;
