import React, {useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const album = {id: 1, image: "https://i.scdn.co/image/ab67616d0000b27354bea3780cb998f903356012", tittle: "Led Zeppelin" }

const ItemDetailContainer = () => {
const [data, setData] = useState ({});

useEffect(() => {
    const getData = new Promise (resolve => {
        setTimeout (() => {
            resolve(album);
        }, 3000);
    });
    getData.then(res => setData(res));
}, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;