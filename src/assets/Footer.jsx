import React from "react";
import facebook from "./imagenes/face.png";
import youtube from "./imagenes/tube.png";
import instagram from "./imagenes/insta.png";
import twitter from "./imagenes/twit.png";

const Footer = () => {
    return (
        <div className="row fondoGris p-5">
            <div className="col">
                <div className="container  text-white">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>TM © 2021 Burger King Corporation. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={facebook} width="24" alt="facebook" />
                            <img src={youtube} width="24" alt="youtube" />
                            <img src={instagram} width="24" alt="instagram" />
                            <img src={twitter} width="24" alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;