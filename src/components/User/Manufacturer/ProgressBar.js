import React from 'react'
import "../../../stylesheets/User/Manufacturer.css"

const ProgressBar = ({title}) => {
    return (
        <div className='progressBar'>
            <h4>{title}</h4>
            <div className='progressBar__rectangle'></div>
        </div>
    )
}

export default ProgressBar
