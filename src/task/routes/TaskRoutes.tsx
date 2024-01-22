import { Route, Routes, Navigate } from 'react-router-dom'
import { WorkspacePage } from '../pages/WorkspacePage'
import { BoardPage } from '../pages/BoardPage'
import { TaskLayout } from '../layout/TaskLayout'

export const TaskRoutes = () => {
  return (
    <TaskLayout>
      <Routes>
        <Route path="workspace" element={<WorkspacePage />} />
        <Route path="board/:boardId" element={<BoardPage />} />

        <Route path="/*" element={<Navigate to="/workspace" />} />
      </Routes>
    </TaskLayout>
  )
}
