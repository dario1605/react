import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Title from "./Title";

const albums = [
    {id: 1, image: "https://i.scdn.co/image/ab67616d0000b27354bea3780cb998f903356012", tittle: "Led Zeppelin" },
    {id: 2, image: "https://mariskalrock.com/wp-content/uploads/2022/01/black-sabbath-dehumanizer-portada.jpg", tittle: "Black Sabbath"},
    {id: 3, image: "https://m.media-amazon.com/images/I/81Xor0JUcML._SL1463_.jpg", tittle:"The Doors"},
];

const ItemListContainer = ({texto}) => {

    const [data, setData] = useState ([])

    useEffect (() => {
        const getData = new Promise (resolve =>{
            setTimeout (() => {
                resolve(albums);
            }, 3000);
        });
        getData.then(res => setData(res))
    }, [])

    const onAdd = (quantity) => {
        console.log (`compraste ${quantity} unidades`)
    }
    return (
        <div>
            <Title  greeting ={texto}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer;