import React from "react";
import descuento1 from "./imagenes/los-natas.jpg";
import descuento2 from "./imagenes/pantera.jpg";
import descuento3 from "./imagenes/led-zeppelin.jpg"

const Descuentos = () => {
    return (
        <div className="container">
            <div className="contenedorTituloDescuentos">
                <h2 className="text-center tituloDescuentos">DESCUENTOS</h2>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src={descuento1} alt="Descuento1" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src={descuento2} alt="Descuento2" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src={descuento3} alt="Descuento3" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    )
}

export default Descuentos;