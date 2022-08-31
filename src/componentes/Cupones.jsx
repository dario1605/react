import React from "react";
import cupon1 from "./imagenes/los-natas.jpg";
import cupon2 from "./imagenes/led-zeppelin.jpg";
import cupon3 from "./imagenes/pantera.jpg";
const Cupones = () => {
    return (
        <div className="container divContainerCupones">
            <div className="row">
                <div className="col-md-4">
                    <img src={cupon1} alt="Cupon1" className="imf-fluid rounded img-thumbnail" />
                </div>
                <div className="col-md-4">
                    <img src={cupon2} alt="Cupon2" className="imf-fluid rounded img-thumbnail" />
                </div>
                <div className="col-md-4">
                    <img src={cupon3} alt="Cupon3" className="imf-fluid rounded img-thumbnail" />
                </div>
            </div>    
        </div>        
    )
}

export default Cupones;