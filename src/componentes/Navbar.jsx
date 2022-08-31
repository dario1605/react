import React from "react";
import Carrito from "./Carrito";
import logo from "./imagenes/logo.png"

const Navbar= () => {
    return (
        <div className="container">
            <nav class="navbar bg-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" width="48" height="38" class="d-inline-block align-text-top"/>
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
                        <a class="navbar-brand" href=""> <Carrito /></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;