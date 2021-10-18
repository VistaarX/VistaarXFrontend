import React from 'react'
import OrderCard from './OrderCard'
import '../../stylesheets/Orders/Orders.css'

const Orders = () => {
    return (
        <div className ="orders">
            <div className="orders__header">
                <h1>Orders</h1>
            </div>
            <div className="orders__body">
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
            </div>
        </div>
    )
}

export default Orders
