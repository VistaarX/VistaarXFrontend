import { Avatar } from '@mui/material'
import React from 'react'
import '../../stylesheets/Feed/FeedComment.css'

const FeedComment = (props) => {
    const {user, body}=props.comment
    return (
        <div className="feedComment">
            <div className="avatar">
            <Avatar/>
            </div>
            <div className="_text">
                <h2 className="name">{user.name}</h2>
                <p className="brand">{user.company_profile ? user.company_profile.name : ""}</p>
                <p className="comment">{body.text}</p>
            </div>
        </div>
    )
}

export default FeedComment
