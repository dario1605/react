import React from "react";
import { Link } from "react-router-dom";
const Item = ({info}) => {

    return (
        <div className="divAlbum">
            <Link to={`/detalle/${info.id}`} className="album">
                <img src={info.image} alt="" />
                <p>{info.title}</p>
            </Link>
        </div>
        
    );
}   

export default Item;