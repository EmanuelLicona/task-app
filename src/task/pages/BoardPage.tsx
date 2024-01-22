import { Navigate, useParams } from 'react-router-dom'
import { BoardContainer } from '../components/BoardContainer'

import './BoardPage.css'

export const BoardPage = () => {
  const { boardId } = useParams()

  if (!boardId) return <Navigate to="/auth/login" />
  if (isNaN(+boardId)) return <Navigate to="/workspace" />

  return (
    <div className='app'>
      <BoardContainer />
    </div>
  )
}
