import { useEffect, useState } from "react"
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
import {  getAllUserData } from "../api/city";
import { User } from "../types/User";
import UserComponent from "../components/city/User";
import { getDistanceFromLatLng } from "../lib/distance";


export default function Dashboard(){
    const [userList, setUserList] = useState<User[]>([]);
    const cityLat = 40.7128;   // New York (string)
    const cityLng = -74.0060;
    useEffect(()=>{
        // in a list sorted by those closest to
        // the Statue of liberty in new york city.
        async function setAllPosts(){
           try{
            let userData = await getAllUserData({
              "fakeUsers":{}
            });
            userData = userData.map((user)=>{
              // Convert the string values to numbers
              const userLat = parseFloat(user.address.geo.lat);
              const userLng = parseFloat(user.address.geo.lng);
              // If parsing fails or results in NaN, handle accordingly (e.g., throw error)
              if (isNaN(userLat) || isNaN(userLng)) {
                throw new Error(`Invalid city latitude/longitude: '${userLat}', '${userLng}'.`);
              }
              // Sort a *copy* of the locations array (to avoid mutating the original)
              const distance = getDistanceFromLatLng(userLat,userLng, cityLat, cityLng);
              const { street, city, lat, lng } = user.address;
              return {...user, address:{
                  street,
                  city,
                  lat,
                  lng,
                  distance
              } }
            });
            userData.sort((userA,userB)=>{
              return userA.address.distance - userB.address.distance;
            });
            setUserList(userData);
           }catch(e){
            console.log(e);
           }
        }

        setAllPosts();
    },[]);




  return <div className="container mx-auto flex flex-wrap gap-y-3">
    <Table>
    <TableCaption>List of Posts</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Address Street</TableHead>
        <TableHead>City</TableHead>
        <TableHead>Distance</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody> {userList.map((user,index)=>(
      <UserComponent {...user} key={index} />
    ))}</TableBody>
    </Table>
   
  </div>
}