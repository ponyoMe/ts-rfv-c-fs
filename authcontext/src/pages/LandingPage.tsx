import { Link } from 'react-router-dom'
import b2 from '../assets/images/b2.jpg'


function Landing(){

    return(
        <div className="bg-no-repeat bg-center bg-cover h-screen w-screen" style={{backgroundImage:`url(${b2})`}}>
            <Navigation />

        </div>
    )

}

const Navigation= ()=>{
    return(
         <nav className='flex justify-end gap-2 p-3 text-white'>
            <Link to='/main' className='hover:underline'>Main</Link>
            <Link to='/login' className='hover:underline'>Login/Register</Link>
        </nav>

    )
   
}

export default Landing