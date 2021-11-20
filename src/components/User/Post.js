import React, { Fragment, useEffect, useState } from "react";
import "../../stylesheets/User/post.css";
import sample2 from "../../img/sample2.png";
import option from "../../img/option.svg"
import { fetchByID } from "../../Api/post/fetchPost";
import { get_diff_in_dates } from "../../config";
const Post = ({posts_array, company}) => {
  const [posts, setPosts]=useState([]);
  useEffect(()=>{
    async function fun(){
      posts_array.map(async(postID)=>{
        let post_info=await fetchByID(postID);
        setPosts((prevPost)=>[...prevPost, post_info.data.post]);
      })
    }
    fun();
  },[]);

  const getDiff=(date)=>{
    const oldDate=new Date(date);
    const res=get_diff_in_dates(oldDate);
    if(typeof res.hours!=="undefined"){
      return res.hours+" Hours";
    }
    else if(typeof res.days!=="undefined"){
      return res.days+" Days";
    }
    else if(typeof res.months!=="undefined"){
      return res.months+" Months";
    }
    else if(typeof res.years!=="undefined"){
      return res.years+" Years";
    }
  }
  if(posts.length!=0){
    return (
      <div className="post">
        {posts.map((post, index)=>{
          return(
            <Fragment key={index}>
              <div className="post__header">
                <img src= {sample2} height="60px" width="60px" alt=""/>
                <div className="post__headerInfo">
                    <h3>{post.user.name}</h3>
                    <h5>{company}</h5>
                    <h6>{post ? getDiff(post.createdAt) : null} ago</h6>
                </div>
                <img src= {option} width="25px" alt=""/>
              </div>
              <br/>
              <p>
                {post.content}
              </p>
              
              <div className="post__image">
                <img src={post.image ? post.image : ""} alt="Post image"></img>
              </div>
          </Fragment>
          )
        })}
      </div>
    );
    }
    else{
      return <p>Loading...</p>
    }
};

export default Post;
