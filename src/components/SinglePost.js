import React,{useState, useEffect} from 'react'
 import Comments from './Comments'
 

export default function SinglePost({id, title, body}){
 
  const [comments, setComments] = useState([])

  useEffect(()=>{
  const fetchComments= async () => {  
   
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data= await res.json()
     setComments(data)
     console.log(data)
   }
  fetchComments()
  
  },[id])



  return (
    <div>
    <div className="single-post">
      <h1>Post {id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
      </div>
      {comments?.map(comment=>(
        <div key={comment.id}>
        <Comments comments={comment} />
        </div>
      ))}
    
    </div>
  )}    




 





// return(
//       <div className="single-post">
//            <h1>Post {id}</h1>
//            <h2>{title}</h2>
//            <p>{body}</p>
//            <Comments selectedId={id}
//                      comments={comments}/>
//       </div>
  
//   )
// }