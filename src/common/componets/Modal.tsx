import { ReactNode } from 'react'

export const Modal = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    // background
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 
    flex justify-center items-center">

      {/* content */}
      <div className={`${className} bg-white p-2 rounded-xl
      w-11/12 md:w-2/3 lg:w-2/4 xl:w-1/4 2xl:w-1/4
      `}>
        {children}
      </div>

    </div>
  )
}
