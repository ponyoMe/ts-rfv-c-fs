import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import type { ReactNode } from "react"

function ProtectedRoutes({children}:{children:ReactNode}){

    const {isAuthenticated} = useAuth()

    if(!isAuthenticated){
        return <Navigate to='/' replace />
    }

    return children
}

export default ProtectedRoutes