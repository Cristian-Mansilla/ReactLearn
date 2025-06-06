import { useState } from "react";

const ChangeImage = () => {
  const imagens = {
    img1: "https://previews.123rf.com/images/sansakphoto/sansakphoto2304/sansakphoto230401431/203759119-astronaut-sitting-on-the-moon-illustration-in-sketch-style.jpg",
    img2: "https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png",
    img3: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
  };

  const [imagen, setImagen] = useState(imagens.img1);

  return (
    <>
      <div>
        <h2>Cambiar imagen</h2>
        <button
          onClick={() => {
            setImagen(imagens.img1);
          }}
        >
          img1
        </button>
        <button
          onClick={() => {
            setImagen(imagens.img2);
          }}
        >
          img2
        </button>
        <button
          onClick={() => {
            setImagen(imagens.img3);
          }}
        >
          img3
        </button>
      </div>
      <img width={400} height={400} src={imagen} alt="img_not_found"></img>
    </>
  );
};

export default ChangeImage;
