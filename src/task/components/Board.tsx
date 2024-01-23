import { useState } from 'react'
import { IBoard } from '../../interfaces/IBoard'

export const Board = ({ board, onDeleteBoard }: { board: IBoard, onDeleteBoard: (board: IBoard) => void }) => {

  const handleOnClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  const handleDeleteBoard = () => {
    onDeleteBoard(board)
  }

  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  return (
    <div className='bg-slate-100 rounded-md min-w-[290px] h-fit'>
      {/* Header */}
      <div className='flex justify-between items-center px-4 py-2'>

        <div className='flex gap-2'>
          <h1 className='font-bold'>{board.title}</h1>
          <span>3</span>
        </div>

        <div className='border relative' >
          <span onClick={handleOnClickDropdown}>Icon</span>


          {/* Dropdown */}
          {
            isOpenDropdown && 
            <div className='flex justify-between px-2 absolute left-0 w-40  border rounded-sm bg-white'>
              <ul>
                <li className='cursor-pointer' onClick={handleDeleteBoard}>Delete</li>
              </ul>

              <span className='cursor-pointer' onClick={handleOnClickDropdown}>x</span>
            </div>
          }
        </div>
      </div>

      {/* cards */}


      {/* add card */}
      <div>
        <button>Add card</button>
      </div>

    </div>
  )
}
