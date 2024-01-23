import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { workspaceSlice } from './auth/workspaceSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    workspace: workspaceSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch