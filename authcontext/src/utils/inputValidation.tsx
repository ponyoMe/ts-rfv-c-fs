import type { InputProps } from "../types/InputTypes"

export const name_validation : InputProps = {
    name:'name',
    id: 'name',
    type:'text',
    placeholder: 'name',
    validation:{
        required: {
            value: true,
            message: 'required'
        },
        maxLength:{
            value:30,
            message:'30 charachters max'
        }
    }
}

export const email_validation : InputProps = {
    name:'email',
    id:'email',
    type:'email',
    placeholder: 'email',
    validation: {
        required:{
            value: true,
            message: 'required'
        },
        pattern:{
            value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'not valid'
        }
    }
}

export const password_validation : InputProps = {
    name:'password',
    id: 'password',
    type: 'password',
    placeholder: 'password',
    validation:{
        required:{
            value: true,
            message: 'required'
        },
        minLength:{
            value:8,
            message: '8 charachters min'
        }
    }
}