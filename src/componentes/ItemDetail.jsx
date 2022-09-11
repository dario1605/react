import React from "react";

const ItemDetail = ({data}) => {
    return (
        <div className="ContainerItemDetail">
            <div className="detail">
                <img className="detail__image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;