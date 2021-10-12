import React,{ createContext } from "react"
import useFirebase from "../components/hooks/useFirebase";

export const AuthContext=createContext()

const AuthProvider = ({children,...rest}) => {
    const all=useFirebase()
    return (
        <AuthContext.Provider value={all}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;