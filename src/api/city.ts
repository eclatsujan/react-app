import APIOptions from "../config/api";
import { City } from "../types/User";

type Options = Record<string, object>

export async function getAllUserData(options: Options) {
    const response = await fetch(APIOptions.SERVER_URL,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'x-api-key': APIOptions.SERVER_X_KEY
        },
        body: JSON.stringify(options)
    });
    const result = await response.json();
    const data:City[] = result.fakeUsers;
    return data;
}