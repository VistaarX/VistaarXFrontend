import React from 'react'
import FeedCard from './FeedCard'
import { Avatar } from '@mui/material';
import '../../stylesheets/Feed/Feed.css'
import { Image, Videocam } from '@mui/icons-material';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__header">
                <div className="top">
                    <Avatar/>
                    <input type="text" className="text" placeholder="Write Something..." />
                </div>
                <div className="bottom">
                    <div className="photo">
                        <Image/> <p className="text">Photo</p>
                    </div>
                    <div className="video">
                        <Videocam/> <p className="text">Video</p>
                    </div>
                </div>
            </div>
            <div className="feed__body">
                <FeedCard />
                <FeedCard />
                <FeedCard />
            </div>
        </div>
    )
}

export default Feed
