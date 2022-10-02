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
              <p>No hay elementos en el Carrito</p>
            <Link to='/'>Hacer compras</Link>
            </>
        );
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total= {totalPrice()}
            </p>
            <button onClick={handleClick}>Generar compra</button>
        </>
    )
}

export default Cart;