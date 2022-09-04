import React from "react";
import Cartwidget from "./CartWidget";
import logo from "./imagenes/logo.png"

const Navbar= () => {
    return (
        <div className="container">
            <nav className="navbar bg-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="48" height="38" className="d-inline-block align-text-top"/>
                        My Music !
                    </a>
                    <ul className="nav ">
                        <li className="nav-item">
                            <a className="nav-link linkNavbar" href="">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkNavbar" href="">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkNavbar" href="">Nosotros</a>
                        </li>
                        <a className="navbar-brand" href=""> <Cartwidget /></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;