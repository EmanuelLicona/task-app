import { useState } from 'react'
import { GrFormAdd, GrFormClose } from 'react-icons/gr'
import { IBoard } from '../../interfaces/IBoard'

export const BoardLast = ({onAddBoard}: {onAddBoard: (board: IBoard) => void}) => {

  const [isAddBoard, setIsAddBoard] = useState(false)
  const [title, setTitle] = useState('')

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleChangeView = () => {
    setIsAddBoard(!isAddBoard)
  }

  function handleAddNewBoard(): void {
    const newBoard: IBoard = {
      id: Date.now(),
      title: title,
    }
    onAddBoard(newBoard)

    setTitle('')
    setIsAddBoard(false)
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
            value={title}
            onChange={handleChangeTitle}
            placeholder='Nombre de la lista'
          />

          <div className='flex items-center gap-10'>
            <button
              className='bg-slate-400 px-2 py-1 rounded-md ms-2'
              onClick={handleAddNewBoard}
            >Crear</button>
            <GrFormClose className='text-slate-400 text-2xl cursor-pointer' onClick={handleChangeView} />
          </div>
        </div>
      }

    </div>
  )
}
