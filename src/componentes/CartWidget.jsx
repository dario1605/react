import React from "react";
import carrito from "./imagenes/Carrito.png"

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} width="50" alt="" />
        </div>
    )
}

export default CartWidget;