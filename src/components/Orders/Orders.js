import React, { Fragment, useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import '../../stylesheets/Orders/Orders.css'
import { getUserOrders } from '../../Api/profile/order_routes';
import { completeOrder } from '../../Api/profile/order_routes';


const Orders = () => {
    let res;
    const [orders, setOrders]=useState([]);
    let [switchRender, setRenderSwitch]=useState(false);
    useEffect(async ()=>{
        let all_orders= await getUserOrders();
        setOrders(all_orders['data'].order);
    },[switchRender]);
    const handleCompleteOrder= async (id)=>{
        await completeOrder(id);
        setRenderSwitch(!switchRender);
    }
    return (
        <div className ="orders">
            <div className="orders__header">
                <h1>Orders</h1>
            </div>
            <div className="orders__body">
                {orders.map((order, index)=>{
                    return (<Fragment key={index}>
                        <OrderCard order={order} handleCompleteOrder={handleCompleteOrder}/>
                    </Fragment>)
                })}
            </div>
        </div>
    )
}

export default Orders
