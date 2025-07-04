import b2 from '../assets/images/b2.jpg'
import { useAuth } from '../context/AuthContext'


function Main(){

    const {user} = useAuth()

    return(
        <div className='h-screen w-screen bg-no-repeat bg-cover flex flex-col items-center justify-center' style={{backgroundImage:`url(${b2})`}}>
            <h2 className='text-2xl font-bold text-pink-600'>Hello, {user?.name}</h2>
        </div>
    )

}

export default Main