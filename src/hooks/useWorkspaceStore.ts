import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { taskApi } from '../api/taskApi'
import { IWorkspace } from '../interfaces/IWorkspace'
import { addNewWorkspace, clearWorkspaceSelected, deleteWorkspace, selectWorkspace, setWorkspaces, startLoadingWorkspace, stopLoadingWorkspace } from '../store/auth/workspaceSlice'
import { AxiosError } from 'axios'

export const useWorkspaceStore = () => {

  const dispatch = useDispatch()
  const {workspaces, isLoading, workspaceSelected} = useSelector((state: RootState) => state.workspace)

  const onLoadingWorkspaces = async () => {
    try {
      dispatch(startLoadingWorkspace())
      const { data } = await taskApi.get<IWorkspace[]>('/workspace')
      dispatch(setWorkspaces(data))
    } catch (error) {
      dispatch(stopLoadingWorkspace())
    }
  }

  const onCreateNewWorkspace = async (workspace: IWorkspace) => {
    try {
      const { title, description } = workspace
      dispatch(startLoadingWorkspace())
      const { data } = await taskApi.post<IWorkspace>('/workspace', { title, description })
      
      dispatch(addNewWorkspace(data))

    } catch (error) {

      if (error instanceof AxiosError) {
        if (error.response?.status === 401) return
      }
      
      dispatch(stopLoadingWorkspace())
    }
  }

  const onDeleteWorkspace = async (workspaceId: string) => {
    try {
      dispatch(startLoadingWorkspace())
      await taskApi.delete(`/workspace/${workspaceId}`)

      dispatch(deleteWorkspace(workspaceId))
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data) {
          console.log(error.response.data)
        }
      }
      
      dispatch(stopLoadingWorkspace())
    }
  }

  const onSelectWorkspace = (workspaceId: string) => {
    dispatch(selectWorkspace(workspaceId))
  }

  const onClearSelectedWorkspace = () => {
    dispatch(clearWorkspaceSelected())
  }

  return {
    workspaces,
    workspaceSelected,
    isLoading,

    // ! Methods
    onLoadingWorkspaces,
    onCreateNewWorkspace,
    onDeleteWorkspace,

    // ! Selectors
    onSelectWorkspace,
    onClearSelectedWorkspace
  }
}
