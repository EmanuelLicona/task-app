import { createSlice } from '@reduxjs/toolkit'
import { IWorkspace } from '../../interfaces/IWorkspace';


export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        workspaces: [] as IWorkspace[],
        errorMessage: undefined,
        isSaving : false,
        isLoading: false
    },
    reducers: {

        startLoadingWorkspace: ( state ) => {
            state.isLoading = true
        },

        setWorkspaces: ( state, { payload }: { payload: IWorkspace[] } ) => {
            state.workspaces = payload
            state.isLoading = false
        },

        addNewWorkspace: ( state, { payload } ) => {
            state.workspaces.push( payload )
        }

    }
})


// Action creators are generated for each case reducer function
export const { 
  startLoadingWorkspace, 
  setWorkspaces, 
  addNewWorkspace
 } = workspaceSlice.actions