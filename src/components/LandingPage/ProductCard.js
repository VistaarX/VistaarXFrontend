import React from 'react'
import '../../stylesheets/LandingPage/ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className="productCard">
            <img src="https://picsum.photos/200" alt="" />
            <div className="title">Red Scarf</div>
            <div className="price">RS. 1299</div>
            <div className="seller">
                <p>Purchased from</p>
                <div className="name">ABC Handlooms Pvt. Ltd.</div>
            </div>
        </div>
    )
}

export default ProductCard
