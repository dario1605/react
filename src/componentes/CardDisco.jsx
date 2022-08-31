import React from "react";
import imgLosNatas from "./imagenes/los-natas.jpg";
import imgLedZeppelin from "./imagenes/led-zeppelin.jpg";
import imgPantera from "./imagenes/pantera.jpg";

const CardDisco = () => {

    const discoNatas = "Los Natas";
    const precioNatas = 4000 ;

    const discoZeppelin = "Led Zeppelin";
    const precioZeppelin = 8000 ;

    const discoPantera = "Pantera";
    const precioPantera = 6000 ;

    return (
        <div>
            <div className="card mb-3 divCardContainer">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imgLosNatas} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{discoNatas}</h5>
                                <p className="card-text">Precio ${precioNatas}.</p>
                            </div>
                        </div>
                </div>
            </div>

            <div className="card mb-3 divCardContainer">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imgPantera} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{discoPantera}</h5>
                                <p className="card-text">Precio ${precioPantera}.</p>
                            </div>
                        </div>
                </div>
            </div>

            <div className="card mb-3 divCardContainer">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imgLedZeppelin} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{discoZeppelin}</h5>
                                <p className="card-text">Precio ${precioZeppelin}.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>    
        )
}

export default CardDisco;