import React, { Fragment, useEffect, useState } from 'react'
import FeedCard from './FeedCard'
import { Avatar } from '@mui/material';
import '../../stylesheets/Feed/Feed.css'
import { Image, Videocam } from '@mui/icons-material';
import { getFeed } from '../../Api/post/fetchPost';

const Feed = () => {
    const [feed, setFeed] = useState([]);
    let [render, setRender]=useState(false);
    useEffect(async ()=>{
        let feed=await getFeed()
        setFeed(feed['data'])
    },[render])
    const switchRender=(e)=>{
        setRender(!render)
    }
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
                {feed.map((posts_object, out_index)=>{
                    return (
                        posts_object.posts.map((feed_card, index)=>{
                            return <Fragment key={out_index+index}>
                                <FeedCard post={feed_card} switchRender={(e)=>switchRender(e)}></FeedCard>
                            </Fragment> 
                        })
                    )
                })}
            </div>
        </div>
    )
}

export default Feed
