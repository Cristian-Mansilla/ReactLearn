const RenderizadoCondicional = ({valor}) => {
//   return <>{valor ? <div>{valor}</div> : <div>undefined</div>}</>; //Si valor esta definido lo muestro, si no, hago otra cosa
  return <>{valor && <div>{valor}</div>}</> //Si valor esta definido lo muestro, si no, no se hace nada
};
export default RenderizadoCondicional;
