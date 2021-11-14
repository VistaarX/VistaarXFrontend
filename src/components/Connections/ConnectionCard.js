import React from 'react'
import '../../stylesheets/Connections/ConnectionCard.css'
const ConnectionCard = () => {
    return (
        <div className="connectionCard">
            <img src="https://picsum.photos/200" alt="" />
            <div className="details">
                <div className="name">Shivam Raj</div>
                <div className="companyName">
                    MS Vellore Furnitures
                </div>
            </div>
        </div>
    )
}

export default ConnectionCard
