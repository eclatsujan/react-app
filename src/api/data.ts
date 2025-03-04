import APIOptions from "../config/api"

type LoginOptions = {
    username: string,
    password: string,
    options?: string,
    type?: string
}

const authUserLogin = (options: LoginOptions) => {
    const {username,password} = options;

    return fetch(APIOptions.SERVER_URL,{
        method:"POST",
        body: JSON.stringify({
            username,
            password
        })
    });
}

export default {
    authUserLogin
};