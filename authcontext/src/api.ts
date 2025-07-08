import axios from "axios"
import type { User } from "./components/Form"

export const URL=import.meta.env.VITE_API_URL

export const registerUser= async (user:User)=>{
    const res = await axios.post(`${URL}/auth/register`, user)
    return res.data
}

export const loginUser = async (user:User)=>{
    const res = await axios.post(`${URL}/auth/login`, user)
    return res.data
}