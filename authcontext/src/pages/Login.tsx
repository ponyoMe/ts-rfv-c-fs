import blueb1 from '../assets/images/blueb1.jpg'
import Form from '../components/Form'

function Login(){

    return(
        <div className='h-screen w-screen bg-cover bg-no-repeat bg-center flex items-center justify-center' 
        style={{backgroundImage:`url(${blueb1})`}}>
            <Form mode='login' />
        </div>
    )

}

export default Login