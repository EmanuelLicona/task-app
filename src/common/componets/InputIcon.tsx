
export interface InputProps {
  id: string
  name: string
  type: string
  placeholder?: string
  className?: string
  value: string

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

}

export const InputIcon = (props: InputProps) => {
  return (
    <div className={`${props.className} 
      flex items-center justify-between border  py-2
      rounded-2xl
      `}>

      <input
        id={props.id}
        type={props.type}
        className=' w-full py-
          focus:border-b-2
          px-2 mx-2
          focus:outline-none
        '
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}
