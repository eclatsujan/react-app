import APIOptions from "../config/api"
import { User } from "../types/Auth";

type LoginOptions = {
    username: string,
    password: string,
    options?: string,
    type?: string
}


// const mockApi

export function mockApiLogin(options: LoginOptions) {
    const user:User = {
        id: '1test2', 
        token: 'test',
        username: options.username
    };
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(user)
        },500);
    })
}


export function authUserLogin(options: LoginOptions) {
    const {username,password} = options;
    return fetch(APIOptions.SERVER_URL,{
        method:"POST",
        body: JSON.stringify({
            username,
            password
        })
    });
}