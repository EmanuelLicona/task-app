
export interface InputProps {
  type: string
  placeholder: string
  className: string
  value: string
}

export const Input = (props: InputProps) => {
  return (
    <input 
      type={props.type} 
      placeholder={props.placeholder} 
      className={props.className} 
      value={props.value} />
  )
}
