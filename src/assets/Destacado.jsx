import React from "react";
import imagen from "./imagenes/black-sabbath.jpg";

const Destacado = () => {
    return (
        <div className="text-center">
            <img src={imagen} alt="Destacado" className="img-fluid" />
        </div>
    )
}

export default Destacado;