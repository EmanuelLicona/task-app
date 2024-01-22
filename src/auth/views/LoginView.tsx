import { FaArrowRight, FaGoogle } from 'react-icons/fa'
import { InputIcon } from '../../common/componets/InputIcon'
import { Gradiant } from '../../common/componets/Gradiant'
import { useForm } from '../../hooks/useForm'

const initialForm = {
  email: '',
  password: ''
}




export const LoginView = ({ toggleView }: { toggleView: () => void }) => {

  const {
    email,
    password,
    onInputChange,
  } = useForm(initialForm)


  return (
    <div>
      <h1 className='text-3xl font-bold text-balance'>Login to your account</h1>

      {/* TODO buttons of google and facebook*/}
      <div className='my-5 flex justify-center items-center'>
        <button className='flex justify-center items-center border p-2 rounded-2xl
          hover:bg-slate-100
        '>
          <span className='mr-2'><FaGoogle /></span>
          <span>GOOGLE</span>
        </button>
      </div>

      <p className='mb-10'>Or sign in with email and password</p>

      {/* TODO form */}

      <form>

        <div className='flex flex-col'>
          <label className='font-bold' htmlFor="email">Email address :</label>
          <InputIcon id="email" type="email" name="email" placeholder="Email" value={email} onChange={onInputChange} />
        </div>

        <div className='flex flex-col mt-4'>
          <label className='font-bold' htmlFor="password">Password :</label>
          <InputIcon id="password" type="password" name="password" placeholder="password" value={password} onChange={onInputChange} />
        </div>




        <div className='mt-10 flex justify-between items-center'>
          <button className=' rounded-2xl overflow-hidden'>
            <Gradiant className='w-full gap-2 py-3 px-4 flex justify-center items-center border text-white'>
              <span>Sign In</span> <FaArrowRight />
            </Gradiant>
          </button>

          <p
            className='text-blue-500 hover:underline cursor-pointer'
            onClick={() => toggleView()}
          >
            Create account
          </p>

        </div>
      </form>

      <div>

      </div>

    </div>
  )
}
