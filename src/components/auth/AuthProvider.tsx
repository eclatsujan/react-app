import { PropsWithChildren, useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";



export default function AuthProvider({children}:PropsWithChildren){ 
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);

    // 3. Define how login/logout update the context
    const setAuthData = (userData: any) => {
        setIsAuthenticated(true);
        setUser(userData);
    };

    const invalidateAuthData = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return <AuthContext.Provider value={{
        isAuthenticated,
        user,
        setAuthData,
        invalidateAuthData
    }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
};