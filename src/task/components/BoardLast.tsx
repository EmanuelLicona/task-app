import { useState } from 'react'
import { GrFormAdd, GrFormClose } from 'react-icons/gr'

export const BoardLast = () => {

  const [isAddBoard, setIsAddBoard] = useState(false)

  const handleChangeView = () => {
    setIsAddBoard(!isAddBoard)
  }

  return (
    <div className='border-[2px] bg-slate-200 rounded-md  w-[290px] h-fit py-1'
    >

      {
        !isAddBoard &&
        <div
          className='flex  items-center cursor-pointer hover:bg-slate-100'
          onClick={handleChangeView}>
          <GrFormAdd className='text-slate-400' />
          <p>Añada otra lista</p>
        </div>
      }

      {
        isAddBoard &&
        <div>
          <input type='text'
            className='w-full px-2 border rounded-md
              mb-2
            '
            placeholder='Nombre de la lista'
          />

          <div className='flex items-center gap-10'>
            <button
              className='bg-slate-400 px-2 py-1 rounded-md ms-2'
            >Crear</button>
            <GrFormClose className='text-slate-400 text-2xl cursor-pointer' onClick={handleChangeView} />
          </div>
        </div>
      }

    </div>
  )
}
