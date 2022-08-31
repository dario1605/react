import React from "react";
import face from "./imagenes/face.png";
import insta from "./imagenes/insta.png";
import tube from "./imagenes/tube.png";
import twit from "./imagenes/twit.png";

const Footer = () => {
    return (
        <div className="row divContainerFooter">
            <div className="col">
                <div className="container text-white p-5">
                    <hr />
                    <div className="row ">
                        <div className="col-md-6">
                            <p>TM | 2022 My Music ! Corporation . Todos Los Derechos Reservados .
                            </p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={face} alt="" width="25" />
                            <img src={insta} alt="" width="25" />
                            <img src={tube} alt="" width="25" />
                            <img src={twit} alt="" width="25" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;