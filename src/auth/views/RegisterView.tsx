import { Gradiant } from '../../common/componets/Gradiant'
import { InputIcon } from '../../common/componets/InputIcon'
import { useForm } from '../../hooks/useForm'


const initialForm = {
  email: '',
  password: ''
}

export const RegisterView = ({ toggleView }: { toggleView: () => void }) => {
  const {
    email,
    password,
    onInputChange,
  } = useForm(initialForm)


  return (
    <div>
      <h1 className='text-3xl font-bold text-balance'>Register a new account</h1>

      <form className='mt-10'>

        <div className='flex flex-col'>
          <label className='font-bold' htmlFor="email">Email address :</label>
          <InputIcon id="email" type="email" placeholder="Email" value={email} onChange={onInputChange} name='email' />
        </div>

        <div className='flex flex-col mt-4'>
          <label className='font-bold' htmlFor="password">Password :</label>
          <InputIcon id="password" type="password" placeholder="password" value={password} onChange={onInputChange} name='password' />
        </div>




        <div className='mt-20 flex justify-between items-center'>
          <button className=' rounded-2xl overflow-hidden'>
            <Gradiant className='w-full gap-2 py-3 px-4 flex justify-center items-center border text-white'>
              <span>Register now</span>
            </Gradiant>
          </button>

          <p
            className='text-blue-500 hover:underline cursor-pointer'
            onClick={() => toggleView()}
          >
            Sign in
          </p>

        </div>
      </form>

      <div>

      </div>

    </div>
  )
}
