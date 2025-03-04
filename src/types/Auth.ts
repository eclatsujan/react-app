export type User = {
    id: string,
    username: string,
    token: null|string
}


export type AuthContextType = {
    isAuthenticated: boolean
    user: User|null,
    setAuthData: (userData:User) => void,
    invalidateAuthData: () => void
};