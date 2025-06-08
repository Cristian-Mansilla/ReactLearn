/**
 * const [alto, setAlto] = useState(0);
  const [ancho, setAncho] = useState(0);
  const handleAlto = (e) => { setAlto(e.target.value) }
  const handleAncho = (e) => { setAncho(e.target.value) }
  const superficie = alto * ancho;
 * 
 *<div>
    <input placeholder="Alto" onChange={handleAlto}></input>
    <input placeholder="Ancho" onChange={handleAncho}></input>
    <Area superficie={superficie}></Area>
  </div>
 * 
 */

const Area = ({superficie}) => {
    return <>
        <div>
            <p>La superficie del triangulo en {superficie}</p>
        </div>
    </>
}
export default Area;