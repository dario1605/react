import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () =>{
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Dario',
            email:'Dario@gmail.com',
            phone: '123123',
            address: 'asd'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then (({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
            <div className="text-center alert alert-success" role="alert">
                <p>No hay elementos en el Carrito</p>
                <Link to='/' className="btn btn-success">Hacer compras</Link>
            </div>
              
            </>
        );
    }
    return (
        <>
        <div className="contenedorCart btn btn-outline-dark">
            {
              cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total= {totalPrice()}
            </p>
            <Link to="/checkout" className="btn btn-outline-primary">Checkout</Link>
            <button onClick={handleClick} className="btn btn-outline-success">Generar compra</button>
        </div>
            
        </>
    )
}

export default Cart;