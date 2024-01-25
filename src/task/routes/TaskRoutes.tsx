import { Route, Routes, Navigate } from 'react-router-dom'
import { ListWorkspacePage } from '../pages/ListWorkspacePage'
import { BoardPage } from '../pages/BoardPage'
import { TaskLayout } from '../layout/TaskLayout'

export const TaskRoutes = () => {
  return (
    <TaskLayout>
      <Routes>
        <Route path="workspace" element={<ListWorkspacePage />} />
        <Route path="b/:workspaceId" element={<BoardPage />} />

        <Route path="/*" element={<Navigate to="/workspace" />} />
      </Routes>
    </TaskLayout>
  )
}
