import { useEffect, useState } from 'react'
import { Board } from './Board'
import { BoardLast } from './BoardLast'
import { useBoardStore } from '../../hooks/useBoardStore'
import { IBoard } from '../../interfaces/IBoard'

export const BoardContainer = () => {

  const { startLoadingBoards } = useBoardStore()

  const [boards, setBoards] = useState([] as IBoard[])

  const onAddBoard = (board: IBoard) => {
    setBoards([...boards, board])
  }

  const onDeleteBoard = (board: IBoard) => {
    setBoards(boards.filter(b => b.id !== board.id))
  }

  useEffect(() => {
    const resp = startLoadingBoards()
    setBoards(resp as IBoard[])
  }, [])



  return (
    <div className='overflow-auto pt-5 h-full w-full '>

      <div className='w-fit px-10 py-0 inline-flex gap-[20px] h-full'>

        {boards.map(board => (
          <Board key={board.id} board={board} 
          onDeleteBoard={onDeleteBoard}
          />
        ))}

        <BoardLast onAddBoard={onAddBoard} />

      </div>

    </div>
  )
}
