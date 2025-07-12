import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Registration"
import Main from "../pages/Main"
import Landing from "../pages/LandingPage"
import ProtectedRoutes from "./ProtectedRoutes"

function AppRoute(){

    return(
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Landing />}/>
                <Route path="/main" element={<ProtectedRoutes><Main /></ProtectedRoutes>} />
            </Routes>
        </div>
    )

}

export default AppRoute