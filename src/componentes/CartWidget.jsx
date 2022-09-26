import React from "react";
import { useCartContext } from "../context/CartContext";
import carrito from "./imagenes/Carrito.png"


export const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <div>
            <img src={carrito} width="50" alt="" />
            <span>{totalProducts() || ''}</span>
        </div>
    )
}

export default CartWidget;