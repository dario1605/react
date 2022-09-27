import React, {useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

/*const albums = [
            {id: 1, image: "https://i.scdn.co/image/ab67616d0000b27354bea3780cb998f903356012", title: "Led Zeppelin" },
            {id: 2, image: "https://mariskalrock.com/wp-content/uploads/2022/01/black-sabbath-dehumanizer-portada.jpg", category: "discos", title: "Black Sabbath"},
            {id: 3, image: "https://m.media-amazon.com/images/I/81Xor0JUcML._SL1463_.jpg", category: "discos", title:"The Doors"},
];*/

const ItemDetailContainer = () => {
const [data, setData] = useState ({});
const { detalleId } = useParams(); 

useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', detalleId);
    getDoc(queryDoc)
    .then(res => setData({ id: res.id, ...res.data() }))
}, [detalleId])

    return (
        <>
         {
          data? <ItemDetail data={data} />:<h1>Cargando...</h1>
         }
         
        </>
    )
}

export default ItemDetailContainer;