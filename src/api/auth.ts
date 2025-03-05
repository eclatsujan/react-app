import APIOptions from "../config/api"
import { User } from "../types/Auth";

type LoginOptions = {
    email: string,
    password: string,
    options?: string,
    type?: string
}


// const mockApi

// export function mockApiLogin(options: LoginOptions) {
//     const user:User = {
//         id: '1test2', 
//         token: 'test',
//         // username: options.username
//     };
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(user)
//         },500);
//     })
// }


export async function authUserLogin(options: LoginOptions) {
    const {email,password} = options;
    const response = await fetch(APIOptions.SERVER_URL,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'x-api-key': APIOptions.SERVER_X_KEY
        },
        body: JSON.stringify({
           authLogin: {
            email,
            pass: password
           }
        })
    });
    const result = await response.json();
    if(result.hasOwnProperty("authLogin") && typeof result.authLogin === "string"){
        throw new Error(result.authLogin);
    }
    return result.authLogin;
}