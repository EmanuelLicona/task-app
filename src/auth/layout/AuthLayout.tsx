import { ReactNode } from 'react'

  export const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {children}
    </div>
  )
}
