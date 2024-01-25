import { useWorkspaceStore } from '../../hooks/useWorkspaceStore'

interface IWorkspaceItem {
  workspaceId: string
  title: string
  description: string
  handleOnClickWorkspace: (workspaceId: string) => void
}

export const WorkspaceItem = ({ workspaceId, title, description, handleOnClickWorkspace }: IWorkspaceItem) => {
  const { onDeleteWorkspace } = useWorkspaceStore()

  const handleDeleteWorkspace = (idWorkspace: string) => {
    if (!idWorkspace) return
    onDeleteWorkspace(idWorkspace)
  }



  return (
    <div className='border p-4 rounded-2xl shadow-md'>

      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-bold cursor-pointer'
          onClick={() => handleOnClickWorkspace(workspaceId)}
        >{title}</h3>
        <button className='text-red-500'
          onClick={() => handleDeleteWorkspace(workspaceId)}
        >delete</button>
      </div>
      <hr className='my-2' />

      <p className='text-md text-pretty'>
        {description}
      </p>
    </div>
  )
}
