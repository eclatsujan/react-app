import { createContext } from "react";
import { AuthContextType } from "../types/Auth";


const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: null,
    setAuthData: () => {},
    invalidateAuthData: () => {},
});

export default AuthContext;

