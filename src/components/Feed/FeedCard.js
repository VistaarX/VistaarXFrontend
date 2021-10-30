import React from 'react'
import { Avatar } from '@mui/material';
import '../../stylesheets/Feed/FeedCard.css'
import FeedComment from './FeedComment';
import {MoreHoriz, Share, ThumbUp, ThumbUpAltTwoTone } from '@material-ui/icons';
import { CommentBankSharp } from '@mui/icons-material';

const FeedCard = () => {
    return (
        <div className="feedCard">
            <div className="feedCard__header">
                <div className="left">
                    <Avatar/>
                    <div className="userDetails">
                        <p className="name">Arjeet Anand</p>
                        <p className="brand">VistaarX</p>
                        <p className="time">4 days ago <span></span></p>
                    </div>
                </div>
                <div className="right">
                    <MoreHoriz/>
                </div>
            </div>
            <div className="feedCard__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Leo nec nulla id ut sed tortor, nunc. Ullamcorper sapien, 
            dictumst nibh lacus, a. Quis nibh mauris ante ultrices 
            adipiscing at maecenas. Sagittis turpis viverra egestas 
            felis ut massa nunc mattis neque.
            </div>
            <div className="feedCard__img">
                <img src="https://picsum.photos/300" alt="" />
                <div className="response">
                    <div className="like">
                        <ThumbUp/>
                        <p>5000</p>
                    </div>
                    <div className="comment">
                        427 Comments
                    </div>
                </div>
                <hr />
                <div className="action">
                    <div className="like">
                        <ThumbUpAltTwoTone/>
                        <p>Like</p>
                    </div>
                    <div className="comment">
                        <CommentBankSharp/>
                        <p>Comment</p>
                    </div>
                    <div className="share">
                        <Share/>
                        <p>Share</p>
                    </div>
                </div>
            </div>
            <div className="feedCard__comment">
                <div className="more">
                    <p>view more comments</p>
                </div>
                <FeedComment/>
                <FeedComment/>
                <FeedComment/>
                <div className="new">
                    <Avatar/>
                    <form>
                        <input type="text" placeholder="Type your comment here" />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
