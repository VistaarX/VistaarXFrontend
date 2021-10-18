import React from 'react'
import '../../stylesheets/CreatePost/CreatePost.css'
import { Button, OutlinedInput } from '@mui/material';

const page5 = () => {
    return (
        <div className="signup post" style={{width: '100%', margin: '0'}}>
            <div className="post__header">
                <h1 className="title">Add your product</h1>
                {/* <div className="cross"><Cancel/></div> */}
            </div>

            <p>Title</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                required
                placeholder="Ray Ban">
            </OutlinedInput>
            <br /><br />

            <p>Price</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                required>
            </OutlinedInput>
            <br /><br />
            
            <p>Add photo</p>
            <div className="post__body">
                <div className="post__container">
                    <div className="content">
                        <input type="file" className="custom-file-input"/>
                        <p className="text">Photo/Video</p>
                        <p className="dnd">or drag and drop</p>
                    </div>
                </div>
                <div className="post__add">
                    <button className="addPost" style={{
                        background: "#0A66C2",
                        fontSize: '22px',
                        boxSizing: 'border-box',
                        paddingTop: '10px',
                        width: window.innerWidth>1024 ? '40%':'100%'
                    }}>Submit</button>

                    <button className="addPost" style={{
                        boxSizing: 'border-box',
                        fontSize: '22px',
                        paddingTop: '10px',
                        width: window.innerWidth>1024 ? '40%':'100%'
                    }}>Add more products</button>
                </div>
            </div>
            
            <Button style={{
                background: "none",
                color: '#666666',
                textDecoration: 'underline',
                textTransform: 'none',
                width: '100%',
                alignSelf: 'center',
                fontWeight: '500',
                fontSize: '22px',
                boxSizing: 'border-box',
                paddingTop: '10px'
            }} type="submit">
                Skip
            </Button>
        </div>
    )
}

export default page5
