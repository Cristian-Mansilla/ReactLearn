import { useEffect } from "react";

export const C1 = () => {
  useEffect(() => {
    console.log("Este codigo se ejecuta cada ves que el componente se monta.");
    return () => {
      console.log(
        "Este codigo se ejecuta cada ves que el componente se desmonta."
      );
    };
  }, []);

  return (
    <>
      <div>
        <p>Componente montado</p>
      </div>
    </>
  );
};
