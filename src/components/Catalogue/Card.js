import React from 'react'
import '../../stylesheets/Catalog/Card.css'

const Card = () => {
    return (
        <div className="catalog__card">
            <div className="catalog__cardImg">
                <img src="https://picsum.photos/50" />
            </div>
            <div className="catalog__info">
                <p className="title">Sunglasses UV</p>
                <p>Rs. 3599</p>
                <button><p>Order Now</p></button>
            </div>
        </div>
    )
}

export default Card
