import React from "react";
import { Link } from "react-router-dom";
const Item = ({info}) => {

    return (
        <div className=" d-inline p-2">
            <div className="card p-2 widthItem " >
                <Link to={`/detalle/${info.id}`} >
                    <img className="card-img " src={info.image} alt="" />
                    <div className="card-body">
                        <p className="card-text btn-lg btn btn-outline-success">{info.title}</p>
                    </div>    
                </Link>
            </div>
        </div>
        
    );
}   

export default Item;