import React from "react";
import { useCartContext } from "../context/CartContext";




const ItemCart = ({ product }) => {
const {removeProduct} = useCartContext ();

    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: US${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)} className="btn btn-outline-danger">Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;