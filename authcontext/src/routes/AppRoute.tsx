import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Registration"
import Main from "../pages/Main"

function AppRoute(){

    return(
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </div>
    )

}

export default AppRoute