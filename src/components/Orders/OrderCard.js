import React from 'react'
import '../../stylesheets/Orders/OrderCard.css'

const OrderCard = () => {
    return (
        <div className="orderCard">
            <div className="orderCard__left">
                <div className="details">
                    <img src="https://picsum.photos/200" alt="" />
                    <div className="info">
                        <p className="name">Red Scarf</p>
                        <p className="cost">Rs. 1299</p>
                    </div>
                </div>
                <div className="buyer">
                    <p>Billed to : Person Name/Firm Name</p>
                </div>
            </div>
            <div className="orderCard__right">
                <button>Complete Order</button>
            </div>
        </div>
    )
}

export default OrderCard
