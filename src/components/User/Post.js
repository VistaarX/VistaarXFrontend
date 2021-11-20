import React, { Fragment, useEffect, useState } from "react";
import "../../stylesheets/User/post.css";
import sample2 from "../../img/sample2.png";
import option from "../../img/option.svg"
import { fetchByID } from "../../Api/post/fetchPost";
import { get_diff_in_dates } from "../../config";
const Post = ({posts_array, company}) => {
  const [posts, setPosts]=useState([]);
  useEffect(async()=>{
    posts_array.map(async(postID)=>{
      let post_info=await fetchByID(postID);
      console.log(post_info)
      setPosts((prevPost)=>[...prevPost, post_info.data.post]);
    })
  },[]);

  const getDiff=(date)=>{
    const res=get_diff_in_dates(date);
    if(res.hours!=0){
      return res.hours+" Hours";
    }
    else if(res.days!=0){
      return res.days+" Days";
    }
    else if(res.months!=0){
      return res.months+" Months";
    }
    else if(res.years!=0){
      return res.years+" Years";
    }
  }

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
                  <h6>{getDiff(post.user.createdAt)} ago</h6>
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
};

export default Post;
