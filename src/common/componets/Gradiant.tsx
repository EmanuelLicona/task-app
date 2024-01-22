import { ReactNode } from 'react'

export const Gradiant = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <span className={`${className} bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400`}>
      {children}
    </span>
  )
}
