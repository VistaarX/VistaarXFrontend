import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Avatar } from '@mui/material';
import '../../stylesheets/Feed/FeedCard.css'
import FeedComment from './FeedComment';
import {MoreHoriz, Share, ThumbUp, ThumbUpAltTwoTone } from '@material-ui/icons';
import { CommentBankSharp } from '@mui/icons-material';
import { getCommentByPostID, makeCommentToPostID } from '../../Api/post/commentActions';
import { likeDislike } from '../../Api/post/postActions';
import { userDetails } from '../../Api/user/fetchRequests';

const FeedCard = (props) => {
    const {user, createdAt, content, _id, likes}=props.post;
    const [comment_obj, setComment_obj] = useState([]);
    let comment_ref = useRef(null);
    let like_ref = useRef(null);
    useEffect(async ()=>{
        let comments_obj=await getCommentByPostID(_id);
        setComment_obj(comments_obj['data']);
        let user_id=await userDetails();
        user_id=user_id['data'].user._id;
        for(var i=0; i<likes.length; i++){
            var like_id=likes[i];
            if(like_id==user_id){
                like_ref.current.textContent="Liked"
                break;
            }
            else{
                like_ref.current.textContent="Like" 
            }
        }
    },[props.post])
    
    async function handleCommentSubmit(e){
        e.preventDefault();
        let comment=comment_ref.current.value;
        await makeCommentToPostID(_id, {
            "text":comment,
            "image":null
        })
        comment_ref.current.value="";
        props.switchRender(e);
    }

    const handleLikeDislike= async(e) =>{
        e.preventDefault();
        await likeDislike(_id);
        props.switchRender(e);
    }
    return (
        <div className="feedCard">
            <div className="feedCard__header">
                <div className="left">
                    <Avatar/>
                    <div className="userDetails">
                        <p className="name">{user.name}</p>
                        <p className="brand">{user.company_profile.name}</p>
                        <p className="time">{createdAt}<span></span></p>
                    </div>
                </div>
                <div className="right">
                    <MoreHoriz/>
                </div>
            </div>
            <div className="feedCard__text">
                {content}
            </div>
            <div className="feedCard__img">
                <img src="https://picsum.photos/300" alt="" />
                <div className="response">
                    <div className="like">
                        <ThumbUp/>
                        <p>{likes.length}</p>
                    </div>
                    <div className="comment">
                        { comment_obj.pagination ? comment_obj.pagination.totalComments: ""} Comments
                    </div>
                </div>
                <hr />
                <div className="action">
                    <div className="like" onClick={(e)=>{
                        handleLikeDislike(e);
                    }}>
                        <ThumbUpAltTwoTone/>
                        <p ref={like_ref}>Like</p>
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
                {comment_obj.comments ? comment_obj.comments.map((comment, index)=>{
                    return <Fragment key={index}>
                        <FeedComment comment={comment}></FeedComment>
                    </Fragment>
                }):null}
                <div className="new">
                    <Avatar/>
                    <form>
                        <input type="text" placeholder="Type your comment here" ref={comment_ref}/>
                        <button onClick={(e)=>handleCommentSubmit(e)}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
