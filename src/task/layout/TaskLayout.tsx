import { ReactNode } from 'react'

export const TaskLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen">
      {/* <Header /> */}

      {children}
    </div>
  )
}
