import { useEffect, useState } from "react"
import { getAllPosts } from "../api/posts";
import { Post } from "../types/Posts";
import PostComponent from "../components/posts/Post";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"


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
    <Table>
    <TableCaption>List of Posts</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Content</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody> {posts.map((post)=>(
      <PostComponent {...post} />
    ))}</TableBody>
    </Table>
   
  </div>
}