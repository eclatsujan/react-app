import { useEffect, useState } from "react"
import { getAllPosts } from "../api/posts";
import { Post } from "../types/Posts";
import PostComponent from "../components/posts/Post";


export default function Dashboard(){
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(()=>{
        async function setAllPosts(){
            const posts = await getAllPosts();
            setPosts(posts);
        }

        setAllPosts();
    },[]);




  return <div className="container mx-auto flex flex-wrap gap-y-3">
    {posts.map((post)=>(
      <PostComponent {...post} />
    ))}
  </div>
}