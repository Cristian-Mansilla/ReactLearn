const ComponenteMultiple = ({ option, dato1, dato2 }) => {
  switch (option) {
    case 1:
      return (
        <>
          {dato1 && (
            <div>
              {dato1} equivalen a {dato1 * 2} euros
            </div>
          )}
        </>
      );
    case 2:
      return <>{dato1 && <div>fahrenheit:{(dato1 * 9) / 5 + 32}</div>}</>;
    case 3:
      return (
        <>
          {dato1 && dato2 && (
            <div>El area del triangulo es: {dato1 * dato2}</div>
          )}
        </>
      );
    default:
      return <></>;
  }
};
export default ComponenteMultiple;
