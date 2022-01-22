import React from 'react'
import '../../stylesheets/LandingPage/ProductCard.css'

const ProductCard = ({product_name, price, image, profile}) => {
    return (
        <div className="productCard">
            <img src={image?image:"https://picsum.photos/200"} alt="" />
            <div className="title">{product_name}</div>
            <div className="price">RS. {price}</div>
            <div className="seller">
                <p>Purchased from</p>
                <div className="name">{profile?profile.name:"NULL"}</div>
            </div>
        </div>
    )
}

export default ProductCard
