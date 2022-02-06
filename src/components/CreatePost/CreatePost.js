import React, { useEffect, useRef, useState } from 'react'
import '../../stylesheets/CreatePost/CreatePost.css'
import Cancel from '@mui/icons-material/Cancel';
import { Avatar } from '@mui/material';
import { userDetails } from '../../Api/user/fetchRequests';
import { createPost } from '../../Api/post/postActions';
import { Redirect } from 'react-router-dom';

const CreatePost = () => {
    let [user_id, set_user_id]=useState(null)
    let post_content_ref=useRef(null);
    let [redirect, setRedirect]=useState(false);
    useEffect(()=>{
        async function fun(){
            user_id=await userDetails();
            if(user_id===null)
                setRedirect(true);
            else
                set_user_id(user_id['data'])
        }
        fun();
    },[])
    const handleSubmitPost=async()=>{
        let content_text=post_content_ref.current.value;
        await createPost({
            "content":content_text,
            "image":"Image URL here."
        });
        post_content_ref.current.value="";
        console.log("Post submitted")
    }
    const autoresize=(e)=>{
        e.target.style.height="auto";
        e.target.style.height = e.target.scrollHeight + 'px';
    }
    if(redirect===true){
        return <Redirect to={'/login'}></Redirect>
    }
    return (
        <div className="createPost">
            <div className="createPost__header">
                <h1 className="title">Create Post</h1>
                <div className="cross"><Cancel/></div>
            </div>
            <hr />
            <div className="createPost__body">
                <div className="createPost__user">
                    <div className="userImg">
                        <Avatar/>
                    </div>
                    <div className="userName">
                        <p className="name">{user_id ? user_id.user.name:""}</p>
                        <p className="company">{user_id ? user_id.user.company_profile.name:""}</p>
                    </div>
                </div>
                <div className="placeholder">
                    <textarea wrap="soft" onChange={(e)=>autoresize(e)} className="text" placeholder={`What’s on your mind ${user_id ? user_id.user.name.split(" ")[0] : ""}?`} ref={post_content_ref}></textarea>
                    <p className="emoji">😀</p>
                </div>
                <div className="createPost__container">
                    <div className="content">
                        <input type="file" className="custom-file-input"></input>
                        <p className="text">Photo/Video</p>
                        <p className="dnd">or drag and drop</p>
                    </div>
                </div>
                <div className="createPost__add">
                    <button className="addPost" onClick={handleSubmitPost}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
