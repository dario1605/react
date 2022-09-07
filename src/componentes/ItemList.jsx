import React from "react";
import Item from "./Item";

const ItemList = ({data = []}) => {
    return (
        data.map(album => <Item key={album.id} info={album} />)
    );
}

export default ItemList;