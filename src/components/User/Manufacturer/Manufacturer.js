import React from 'react'
import "../../../stylesheets/User/Manufacturer.css"
import ProgressBar from './ProgressBar'

const Manufacturer = () => {
    return (
        <div className='company'>
            <div className='company__headBox'>
                <div className='company__avatar'>
                    {/* Add Avatar img here */}
                </div>
            </div>

            <div className='company__detail'>
                <h1>Ray Ban Manufactrer</h1>
                <h6>Delhi</h6>
                <h4>Estd. 1965</h4>
                <div className='company__designation'>Manufacturer</div>
            </div>
            <br/>
            <ProgressBar title = "GST" />
            <ProgressBar title = "Annual Turnover"/>
            <ProgressBar title = "Main Markets"/>
            <ProgressBar title = "Product Category"/>

            <br/>
        </div>
    )
}

export default Manufacturer
