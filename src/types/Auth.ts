export type User = {
    username: string,
    token: null
}


export type AuthContextType = {
    isAuthenticated: boolean
    user: User|null,
    login: (username:string, password: string) => void,
    logout: () => void
};