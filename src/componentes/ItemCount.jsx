import React,{useState} from "react";
import { useEffect } from "react";

export const ItemCount = ({initial, stock , onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count -1 );
    }

    const increase = () => {
        setCount(count +1 );
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]) 

    return (
        <div className=" counter text-bg-dark ">
            <button disabled={count <= 1} onClick={decrease} className="btn btn-danger">-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase} className= "btn btn-success">+</button><br/>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className="btn btn-outline-success">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;