import { createSlice } from '@reduxjs/toolkit'
import { IWorkspace } from '../../interfaces/IWorkspace';


export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        workspaces: [] as IWorkspace[],
        workspaceSelected: {} as IWorkspace,
        errorMessage: '',
        isSaving : false,
        isLoading: false
    },
    reducers: {

        startLoadingWorkspace: ( state ) => {
            state.isLoading = true
        },

        stopLoadingWorkspace: ( state ) => {
            state.isLoading = false
        },

        setWorkspaces: ( state, { payload }: { payload: IWorkspace[] } ) => {
            state.workspaces = payload
            state.isLoading = false
        },

        addNewWorkspace: ( state, { payload } ) => {
            state.workspaces.push( payload )
            state.isLoading = false
        },

        deleteWorkspace: ( state, { payload } ) => {
            state.workspaces = state.workspaces.filter( workspace => workspace.workspaceId !== payload )
            state.isLoading = false
        },

        selectWorkspace: ( state, { payload } ) => {
            const workspace = state.workspaces.find( workspace => workspace.workspaceId === payload )
            if ( !workspace ) return
            state.workspaceSelected = workspace
        },

        clearWorkspaceSelected: ( state ) => {
            state.workspaceSelected = {} as IWorkspace
        },

        setErrorMessage: ( state, { payload } ) => {
            state.errorMessage = payload
        },

        clearErrorMessage: ( state ) => {
            state.errorMessage = ''
        },

        

    }
})


// Action creators are generated for each case reducer function
export const { 
  startLoadingWorkspace, 
  stopLoadingWorkspace,
  setWorkspaces, 
  addNewWorkspace,
  deleteWorkspace,
  selectWorkspace,
  clearWorkspaceSelected,
  setErrorMessage,
  clearErrorMessage
 } = workspaceSlice.actions