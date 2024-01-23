import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { taskApi } from '../api/taskApi'
import { IWorkspace } from '../interfaces/IWorkspace'
import { setWorkspaces, startLoadingWorkspace } from '../store/auth/workspaceSlice'

export const useWorkspaceStore = () => {

  const dispatch = useDispatch()
  const {workspaces, isLoading} = useSelector((state: RootState) => state.workspace)

  const onLoadingWorkspaces = async () => {
    try {
      dispatch(startLoadingWorkspace())
      const { data } = await taskApi.get<IWorkspace[]>('/workspaces')
      
      // sleep(1000)
      await new Promise(resolve => setTimeout(resolve, 3000))

      dispatch(setWorkspaces(data))
    } catch (error) {
      console.log('Error cargando espacios');
      console.log(error)
    }
  }

  return {
    workspaces,
    isLoading,

    // ! Methods
    onLoadingWorkspaces
  }
}
