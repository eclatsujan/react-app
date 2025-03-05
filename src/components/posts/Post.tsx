
import { Post } from "../../types/Posts";
import {
    TableCell,
    TableRow,
  } from "../ui/table"

export default function PostComponent({ title,body,id }: Post){
    return <TableRow>
        <TableCell>{id.toString()}</TableCell>
        <TableCell className="font-medium">{title}</TableCell>
        <TableCell>{body}</TableCell>
      </TableRow>
  
}