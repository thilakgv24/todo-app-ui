// Here we are creating a context and that context can be share across the components
// we need put some state in the context

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// componets can use below useauth to get the information, a simplified code
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider( {children }) {

    const [number, setNumber] = useState(0);

    // setInterval(() => setNumber(number + 1), 100)
    
    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    )
}