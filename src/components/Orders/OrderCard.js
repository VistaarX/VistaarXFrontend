import React from 'react'
import '../../stylesheets/Orders/OrderCard.css'

const OrderCard = (props) => {
    const {product_name, price, image}=props.order.product;
    
    return (
        <div className="orderCard">
            <div className="orderCard__left">
                <div className="details">
                    <img src={image ? image : "https://picsum.photos/200"} alt="" />
                    <div className="info">
                        <p className="name">{product_name}</p>
                        <p className="cost">Rs. {price}</p>
                    </div>
                </div>
                <div className="buyer">
                    <p>Billed to : {props.order.to ? props.order.to.name : ""}</p>
                </div>
            </div>
            <div className="orderCard__right">
                <button onClick={()=>props.handleCompleteOrder(props.order._id)}>Complete Order</button>
            </div>
        </div>
    )
}

export default OrderCard
