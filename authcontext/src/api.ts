import axios from "axios"
import type { User } from "./components/Form"

export const URL=import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL:URL
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const registerUser= async (user:User)=>{
    const res = await api.post(`${URL}/auth/register`, user)
    return res.data
}

export const loginUser = async (user:User)=>{
    const res = await api.post(`${URL}/auth/login`, user)
    console.log(res.data)
    return res.data
}