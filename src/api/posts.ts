import { Post } from "../types/Posts";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
 
export async function getAllPosts(){
    const response = await fetch(POST_URL);
    const data:Post[] = response.json();
    return data;
}
