import React from "react";
import ItemCount from "./ItemCount";
import Title from "./Title";

const ItemListContainer = ({texto}) => {
    const onAdd = (quantity) => {
        console.log (`compraste ${quantity} unidades`)
    }
    return (
        <div>
            <Title  greeting ={texto}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer;