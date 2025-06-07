/**
 * const [celsius, setCelsius] = useState(0);
   const celsiusToFahrenheit = (e) => { setCelsius(e.target.value) }
   const fahrenheit = celsius * 9/5+32;
 *  
  <div>
    <input placeholder="Ingrese grados celsius" onChange={celsiusToFahrenheit}></input>
    <Temp fahrenheit={fahrenheit}/>
  </div>
 * 
 */

const Temp = ({ fahrenheit }) => {
  return (
    <>
      <div>Fahrenheit:{fahrenheit}</div>
    </>
  );
};
export default Temp;
