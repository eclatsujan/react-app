
import { Post } from "../../types/Posts";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function PostComponent({ title,body,id }: Post){
    return <Card className="min-w-100 grow-1">
        <CardHeader>
            <div className="w-8 h-8 rounded-full text-white font-semibold bg-blue-400 grid place-items-center">{id.toString()}</div>
        </CardHeader>
        <CardContent>
            <h3 className="font-bold">{title}</h3>
            <p>{body}</p>
        </CardContent>
        <CardFooter>

        </CardFooter>
    </Card>
}