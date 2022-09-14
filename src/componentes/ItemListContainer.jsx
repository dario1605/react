import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Title from "./Title";
import { useParams } from "react-router-dom";

const albums = [
    {id: 1, image: "https://i.scdn.co/image/ab67616d0000b27354bea3780cb998f903356012", category: "discos", tittle: "Led Zeppelin" },
    {id: 2, image: "https://mariskalrock.com/wp-content/uploads/2022/01/black-sabbath-dehumanizer-portada.jpg", category: "discos", tittle: "Black Sabbath"},
    {id: 3, image: "https://m.media-amazon.com/images/I/81Xor0JUcML._SL1463_.jpg", category: "discos", tittle:"The Doors"},
    {id: 4, image: "https://http2.mlstatic.com/D_NQ_NP_704635-MLA42000134898_052020-W.jpg", category: "vinilos", tittle: "Vinilo Led Zeppelin"},
    {id: 5, image: "https://http2.mlstatic.com/D_NQ_NP_848201-MLA47281123832_082021-W.jpg", category: "vinilos", tittle: "Vinilo Black Sabbath"},
    {id: 6, image: "https://http2.mlstatic.com/D_NQ_NP_900647-MLA51460817513_092022-W.jpg", category: "vinilos", tittle: "Vinilo The Doors"},
];

const ItemListContainer = ({texto}) => {

    const [data, setData] = useState ([])

    const {categoriaId} = useParams();

    useEffect (() => {
        const getData = new Promise (resolve =>{
            setTimeout (() => {
                resolve(albums);
            }, 1000);
        });
        if(categoriaId) {
            getData.then(res => setData(res.filter(albums => albums.category === categoriaId)));
        } else{
        getData.then(res => setData(res));
        }
    
    }, [categoriaId])

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