import React from 'react'
import "../../stylesheets/User/Manufacturer.css"

const ProgressBar = ({title, value}) => {
    return (
        <div className='progressBar'>
            <h4>{title}</h4>
            <div className='progressBar__rectangle'>{value}</div>
        </div>
    )
}

export default ProgressBar
