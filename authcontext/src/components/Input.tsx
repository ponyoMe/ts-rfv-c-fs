import {motion} from 'framer-motion'
import { useFormContext } from 'react-hook-form'
import type { InputProps } from '../types/InputTypes'

function Input({name, id, type, placeholder, validation}:InputProps){

    const {register, formState: {errors}} = useFormContext()
    const error = errors[name]
    const isInvalid = !!error

    return(
        <div className='flex flex-col w-full gap-3'>
            <div className='flex justify-end'>
                {isInvalid && <InputError message={error.message} />}
            </div>

            <input 
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(name,validation)}
            className=' rounded-2xl p-3 border-2 border-blue-200 outline-blue-300 '
            />

        </div>
    )

}

const InputError = ({message}:{message:any}) => {

  return(
    <motion.p {...framer_error} 
    className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
        {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

export default Input