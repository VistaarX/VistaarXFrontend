import React from 'react'
import '../../stylesheets/CreatePost/CreatePost.css'
import Cancel from '@mui/icons-material/Cancel';
import { Avatar } from '@mui/material';

const CreatePost = () => {
    return (
        <div className="post">
            <div className="post__header">
                <h1 className="title">Create Post</h1>
                <div className="cross"><Cancel/></div>
            </div>
            <hr />
            <div className="post__body">
                <div className="post__user">
                    <div className="userImg">
                        <Avatar/>
                    </div>
                    <div className="userName">
                        <p className="name">Arjeet Anand</p>
                        <p className="company">VistaarX</p>
                    </div>
                </div>
                <div className="placeholder">
                    <input className="text" type="text" placeholder="What’s on your mind , Arjeet?" />
                    <p className="emoji">😀</p>
                </div>
                <div className="post__container">
                    <div className="content">
                        <input type="file" className="custom-file-input"></input>
                        <p className="text">Photo/Video</p>
                        <p className="dnd">or drag and drop</p>
                    </div>
                </div>
                <div className="post__add">
                    <button className="addPost">Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
