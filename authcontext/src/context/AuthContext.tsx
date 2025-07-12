import { createContext, useContext, useState } from "react"
import {type User} from '../components/Form'

type AuthContextType = {
    user : User | null,
    login : (userData : any)=>void,
    logout : ()=> void,
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider= ({children} : {children : React.ReactNode})=>{
    const [user, setUser] = useState<User | null>(null)
    const login = (userData: any) => setUser(userData)
    const logout = ()=> setUser(null)

    const isAuthenticated = !!user

    return(
        <AuthContext.Provider value={{user, login, logout, isAuthenticated}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext)!

