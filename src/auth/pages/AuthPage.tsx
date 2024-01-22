import { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { LoginView } from '../views/LoginView'
import { RegisterView } from '../views/RegisterView'
import { Gradiant } from '../../common/componets/Gradiant'

export const AuthPage = () => {

  const [isLogin, setIsLogin] = useState(true)

  const toggleView = () => {
    setIsLogin(!isLogin)
  }

  return (
    <AuthLayout>
      <div className='grid sm:grid-rows-2 w-full md:grid-cols-2 md:grid-rows-1 
        border md:w-2/3 md:h-1/2 rounded-2xl 
        overflow-hidden  shadow-2xl'>
          
        {/* Image */}
        <Gradiant className='flex justify-center items-center'>
          <img className='w-11/12 sm:w-3/4 md:w-1/1' src="https://placehold.co/300x200?text=Logo" alt="Logo" />
        </Gradiant>

        {/* View login or register */}  
        <div className=' flex justify-center items-center'>
          {
            isLogin
              ? <LoginView toggleView={toggleView} />
              : <RegisterView toggleView={toggleView} />
          }
        </div>
      </div>
    </AuthLayout>
  )
}
