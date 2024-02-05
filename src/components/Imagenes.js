import React, { useState } from "react";
import imgTr from '../triste.png';
import imgAc from '../feliz.png';
const Imagenes = () =>{
    const [imagenActual, setImagenActual] = useState(imgAc);

    const cambiarImagen = () => {
      const nuevaImagen = imagenActual === imgAc ? imgTr : imgAc;
      setImagenActual(nuevaImagen);
    };

    return(
        <div>
            <h1><img src={`${imagenActual}`} alt="Imagen actual" /></h1>
            <button onClick={cambiarImagen}>Cambiar Imagen</button>
        </div>
    )
}

export default Imagenes;