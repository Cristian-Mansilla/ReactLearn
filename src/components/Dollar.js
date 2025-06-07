/** LOGICA EN APP.JS, ESTE COMPONENTE SOLO SE ENCARGA DEL RENDERIZADO
  const [euro,setEuro] = useState(0);
  const handlerDollar = (e) => { setEuro(e.target.value) }
  const dollars = euro * 2;
 * 
  RETORNO DE APP.JS
  <div>
    <input placeholder="Euro" onChange={handlerDollar}></input>
    <Dollars amount={dollars}/>
  </div>
 * 
 */

const Dollars = ({ amount }) => {
  return (
    <>
      <p>Canridad de dolares {amount}</p>
    </>
  );
};
export default Dollars;
