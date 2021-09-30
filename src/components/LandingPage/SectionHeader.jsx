import { Button } from '@material-ui/core'
import React from 'react'
import '../../stylesheets/LandingPage/SectionHeader.css'
const SectionHeader = ({title,link}) => {
    return (
        <div className="SectionHeader">
            <div className="Title">
            <h2>{title}</h2>
            </div>
            <Button color="inherit" style={{textTransform:"none"}} href={link}>
                See All
            </Button>
        </div>
    )
}

export default SectionHeader
