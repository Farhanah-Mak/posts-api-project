import React from 'react'

export default function Comments({ comments }) {
  return (
    
    <div className='comments'>
      <h1>Comment {comments.id}</h1>
      <p>{comments.name}</p>
      <p>----{comments.email}</p>
    </div>)
  } 
 




















// export default function Comments({comments, selectedId}){
   
// const isShown= comments.map((comment,selectedId) => comment.postId===selectedId)
//   return(
//     <div className='comments'>
//      {isShown && comments.map(comment=> (
//             <div key={comment.id} className='comment'>
//             <h1>Comment {comment.postId}</h1>
//             <p>{comment.name}</p>
//             <p>----{comment.email}</p>
//             </div>
//          )  
//      )}
       
//     </div>
//   )
//      }

    