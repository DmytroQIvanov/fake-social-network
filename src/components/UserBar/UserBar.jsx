import { React } from "react";
import "./UserBar.sass";
import phone from "./img/phone.svg";
import address from "./img/address.svg";
import commentsIMG from "./img/comments.svg";


export let UserBar = (props) => {
  const {userInfo,userPosts,userId,postComments}= props; //props
  let userPostId=[]  
  const comments = postComments.filter((elem)=>(elem.postId/10==userId))
  console.log(postComments)
  console.log(comments)
  
  

  return <div className="UserBar">

    {/* USER */}

  <div>
    <div className="UserBar__name">{userInfo.name}</div>
    <div className="UserBar__username">Username: {userInfo.username}</div>
    <div className="UserBar__phone"><img src={phone}/><span>Phone: </span>{userInfo.phone}</div>
    <div className="UserBar__address"><img src={address}/><span>Address: </span>{userInfo.address.street}, {userInfo.address.city}, {userInfo.address.suite}</div>
    <div className="UserBar__phone">{userInfo.phone}</div>
  </div>

      {/* POSTS */}

  <div className="">
    <div>- Posts:</div>
  {
  userPostId =userPosts.filter((elem) =>(elem.userId ==userId)),
    userPostId.map(elem=>{
      return (
      <div className="UserBar__post">
        <div className="UserBar__title">{elem.title}</div>
        <div className="UserBar__body">{elem.body}</div>
        <div><img src={commentsIMG}/>{comments.length}</div>
      </div>)
    })
  } 
  </div>
    
  </div>;
};
