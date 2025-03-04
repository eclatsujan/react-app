import { createContext } from "react";
import { AuthContextType } from "../types/Auth";


const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {},
});

export default AuthContext;

