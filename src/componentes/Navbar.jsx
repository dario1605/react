import React from "react";
import Cartwidget from "./CartWidget";
import logo from "./imagenes/logo.png"
import { NavLink } from "react-router-dom";
const Navbar= () => {
    return (
        <div className="container">
            <nav className="navbar bg-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>
                        <img src={logo} alt="" width="48" height="38" className="d-inline-block align-text-top"/>
                        My Music !
                    </NavLink>
                    <ul className="nav ">
                        <li className="nav-item">
                            <NavLink className="nav-link linkNavbar link-success" to='/categoria/discos' >Discos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link linkNavbar link-success" to='/categoria/vinilos' >Vinilos</NavLink>
                        </li>
                        <NavLink className="navbar-brand" to='cart'> 
                            <Cartwidget />
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;