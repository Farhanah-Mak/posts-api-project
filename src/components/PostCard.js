import React from "react"

// you could also load comments from the post here
// i think the api there to fetch post comments

export default function PostCard({ id, title, body, isSelected, onClick }) {
  
    return (
      <div className="post-card">
      <div className={`post ${isSelected ? 'post-selected' : "post"}`} onClick={onClick}>
        <h1>Post {id} </h1>
        <h2>{title}</h2>
         <p>{body}</p>
        </div>
     </div>          
    )
  } 
  

 
  