import { type RegisterOptions } from "react-hook-form"
export interface InputProps{
    name: string
    id: string
    type:string
    placeholder:string
    validation?: RegisterOptions
}