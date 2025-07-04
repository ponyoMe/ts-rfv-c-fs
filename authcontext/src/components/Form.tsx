import { FormProvider, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import Input from "./Input"
import { email_validation, name_validation, password_validation } from "../utils/inputValidation"
import { useAuth } from "../context/AuthContext"


type Mode = 'login' | 'register'

interface ModeProps{
    mode : Mode
}

export type User = {
    name?:string,
    email: string,
    password: string
}

function Form({mode}:ModeProps){

    const methods = useForm<User>()
    const navigate = useNavigate()

    const isLogin = mode === 'login'
    const {login} = useAuth()

    const onSubmit = methods.handleSubmit(data=>{
        if(isLogin){
            console.log('logging in...', data)
            const stored = localStorage.getItem('user')
            if(!stored) return alert('User not found!')

            const userStored = JSON.parse(stored)
            if(userStored.email === data.email && userStored.password === data.password){
                login(userStored)
                navigate('/main')
            }else{
                alert('Incorrect email or password')
            }
            
        }else{
            console.log('redirecting to the login', data)
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/')
        }
        methods.reset()
    })

    return(
       <FormProvider {...methods}>
        <form onSubmit={onSubmit} noValidate className="">
            <div className='flex flex-col w-[400px] gap-3'>
                <div  className='flex flex-col gap-3 backdrop-blur-2xl shadow-2xl rounded-2xl p-10'>
                    <h3 className='text-center text-blue-400 font-bold text-3xl'>{isLogin ? 'Login': 'Register'}</h3>
                    {!isLogin && <Input {...name_validation} />}
                    <Input {...email_validation} />
                    <Input {...password_validation}/>
                    <button className='uppercase text-white bg-blue-400 border rounded-2xl outline-nono border-none p-4 font-bold hover:bg-blue-500'
                    >{isLogin ? 'Login': 'Register'}</button>
                </div>
                <div className='flex flex-col backdrop-blur-2xl shadow-2xl rounded-2xl p-3'>
                   <Link to={isLogin ? '/register' : '/'}>
                    <h4 className='text-white underline hover:font-bold text-center hover:cursor-default'>
                       {isLogin ? "Don't have an account?" : "Already have an account?"}</h4>
                    </Link>
                </div>
            </div>    
        </form>

       </FormProvider>
    )
    

}

export default Form