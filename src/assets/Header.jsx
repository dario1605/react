import React from "react";
import logo from "./imagenes/logo.png"
const Header = () => {
    return (
        <div className="container">
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="Calavera" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link linkHeader" href="#">Pedi tu Disco Favorito</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link linkHeader" href="#">Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link linkHeader" href="#">Descuentos</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;