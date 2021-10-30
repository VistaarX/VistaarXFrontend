import { Avatar } from '@mui/material'
import React from 'react'
import '../../stylesheets/Feed/FeedComment.css'

const FeedComment = () => {
    return (
        <div className="feedComment">
            <div className="avatar">
            <Avatar/>
            </div>
            <div className="_text">
                <h2 className="name">Mrinal Seth</h2>
                <p className="brand">VistaarX</p>
                <p className="comment">Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Reiciendis temporibus eos, omnis vitae deleniti, 
                debitis nemo atque.</p>
            </div>
        </div>
    )
}

export default FeedComment
