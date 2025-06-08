const ComponenteMultiple = ({ option, noches }) => {
  //   switch (option) {
  //     case 1:
  //       return (
  //         <>
  //           {dato1 && (
  //             <div>
  //               {dato1} equivalen a {dato1 * 2} euros
  //             </div>
  //           )}
  //         </>
  //       );
  //     case 2:
  //       return <>{dato1 && <div>fahrenheit:{(dato1 * 9) / 5 + 32}</div>}</>;
  //     case 3:
  //       return (
  //         <>
  //           {dato1 && dato2 && (
  //             <div>El area del triangulo es: {dato1 * dato2}</div>
  //           )}
  //         </>
  //       );
  //     default:
  //       return <></>;
  //   }

  switch (option) {
    case 1:
      return <div>Coste alquiler hotel: {noches * 40}</div>;
    case 2:
      if (noches >= 7)
        return <div>Coste de alquiler coche: {noches * 40 - 50}</div>;
      else if (noches >= 3)
        return <div>Coste alquiler coche: {noches * 40 - 20}</div>;
      return <div>Coste alquiler coche: {noches * 40}</div>;
    default:
  }
};
export default ComponenteMultiple;
