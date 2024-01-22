import { Board } from './Board'
import { BoardLast } from './BoardLast';

export const BoardContainer = () => {
  return (
    <div className='overflow-auto pt-5 h-full w-full '>

      <div className='w-fit px-10 py-0 inline-flex gap-[20px] h-full'>

        <Board />
        <Board />



        <BoardLast />

      </div>

    </div>
  )
}
