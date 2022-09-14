import React, {useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const albums = [
            {id: 1, image: "https://i.scdn.co/image/ab67616d0000b27354bea3780cb998f903356012", tittle: "Led Zeppelin" },
            {id: 2, image: "https://mariskalrock.com/wp-content/uploads/2022/01/black-sabbath-dehumanizer-portada.jpg", category: "discos", tittle: "Black Sabbath"},
            {id: 3, image: "https://m.media-amazon.com/images/I/81Xor0JUcML._SL1463_.jpg", category: "discos", tittle:"The Doors"},
];

const ItemDetailContainer = () => {
const [data, setData] = useState ({});
const { detalleId } = useParams(); 

useEffect(() => {
    const getData = new Promise (resolve => {
        setTimeout (() => {
            resolve(albums);
        }, 2000);
    });
    getData.then(res => setData(res.find(album => album.id === parseInt(detalleId))));
}, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;