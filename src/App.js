import Header from './components/Header'
import PostCard from './components/PostCard'
import SinglePost from './components/SinglePost'
import { useState,useEffect } from 'react'
import './index.css';

function App() {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  

    const fetchPost = async () => {
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data)
        setPosts(data)
      }
      catch (error){
        console.log('error')
      }
     
    }
  
    useEffect(()=>{
      fetchPost()
    },[])
  
 
  

  const postClicked = (post) => {
    // console.log('hello')
    setSelectedPost(post)
   
  }

  const isShown = !!selectedPost

  
    return (
      <main className='container'>
        <Header />
        <div className='left'>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              isSelected={selectedPost?.id === post?.id}
              onClick={() => postClicked(post)}
            />
          ))}
        </div>
          <div className='right'>
          {isShown && 
          ( 
            <SinglePost id={selectedPost.id}
            title={selectedPost.title}
            body={selectedPost.body}
        
          /> 
           
          ) } 
          </div>
        </main>
       
    )
  }
  export default App;
       

