import blueb1 from '../assets/images/blueb1.jpg'
import Form from '../components/Form'

function Register(){
    return(
        <div style={{backgroundImage:`url(${blueb1})`}}
         className='h-screen w-screen bg-cover bg-no-repeat flex items-center justify-center'>
            <Form mode='register' />

        </div>
    )
}

export default Register