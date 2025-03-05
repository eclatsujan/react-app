import { User } from "../../types/User";
import { TableCell, TableRow } from "../ui/table";


export default function UserComponent({id,name,address}:User){
    const {street,city,distance} = address;
    return <TableRow>
        <TableCell>{id.toString()}</TableCell>
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell className="font-medium">{street}</TableCell>
        <TableCell className="font-medium">{city}</TableCell>
        <TableCell className="font-medium">{distance}</TableCell>
    </TableRow>
}