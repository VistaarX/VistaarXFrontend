import React from "react";
import "../../stylesheets/User/post.css";
import sample2 from "../../img/sample2.png";
import option from "../../img/option.svg"
const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <img src= {sample2} height="60px" width="60px" alt=""/>
        <div className="post__headerInfo">
            <h3>Shivam Raj</h3>
            <h5>VistaarX</h5>
            <h6>4 days ago</h6>
        </div>
        <img src= {option} width="25px" alt=""/>
      </div>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nec nulla
        id ut sed tortor, nunc. Ullamcorper sapien, dictumst nibh lacus, a. Quis
        nibh mauris ante ultrices adipiscing at maecenas. Sagittis turpis
        viverra egestas felis ut massa nunc mattis neque.
      </p>
      {/* <img src={sample} alt=""/> */}
      <div className="post__image">

      </div>
    </div>
  );
};

export default Post;
