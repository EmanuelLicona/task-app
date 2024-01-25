import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { BoardContainer } from '../components/BoardContainer'
import { useWorkspaceStore } from '../../hooks/useWorkspaceStore'
import { useEffect } from 'react'


export const BoardPage = () => {
  const { workspaceId } = useParams()
  const navigate = useNavigate()

  const { onClearSelectedWorkspace, workspaceSelected } = useWorkspaceStore()

  useEffect(() => {
    if (!workspaceSelected?.workspaceId) {
      navigate(`/workspaces`)
    }
  }, [])

  if (!workspaceId) return <Navigate to="/workspace" />

  const handleOnClickWorkspace = () => {
    onClearSelectedWorkspace()
    navigate(`/workspaces`)
  }

  return (
    <div className='w-full h-full'>
      <BoardContainer />

      <div className='-1 absolute bottom-10 right-10'>
        <button className='bg-slate-500 px-4 py-2 rounded-2xl text-white hover:bg-slate-600'
          onClick={() => handleOnClickWorkspace()}
        >
          Workspaces
        </button>
      </div>
    </div>
  )
}
