import React from 'react'
import { createOrder } from '../../Api/profile/order_routes'
import '../../stylesheets/Catalog/Card.css'

const Card = (props) => {
    const handlePutOrder=async (id)=>{
        let make_order= await createOrder(id);
        console.log("Order complete");
    }
    return (
        <div className="catalog__card">
            <div className="catalog__cardImg">
                <img src={props.product.image ? props.product.image : "https://picsum.photos/50"} alt="Product photo" />
            </div>
            <div className="catalog__info">
                <p className="title">{props.product.product_name}</p>
                <p>Rs. {props.product.price}</p>
                <button onClick={()=>handlePutOrder(props.product._id)}><p>Order Now</p></button>
            </div>
        </div>
    )
}

export default Card
