export type User = {
    id: string,
    firstName: string,
    token: null|string,
    refreshToken: string,
}


export type AuthContextType = {
    isAuthenticated: boolean
    user: User|null,
    setAuthData: (userData:User) => void,
    invalidateAuthData: () => void
};