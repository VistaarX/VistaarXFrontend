import { Button } from '@material-ui/core'
import React from 'react'
import '../../stylesheets/LandingPage/SectionHeader.css'
const SectionHeader = ({title,link}) => {
    return (
        <div className="SectionHeader">
            <div className="Title">
            <h2>{title}</h2>
            </div>
            <Button  style={{textTransform:"none", color:"#203341"}} href={link}>
                See All
            </Button>
        </div>
    )
}

export default SectionHeader
