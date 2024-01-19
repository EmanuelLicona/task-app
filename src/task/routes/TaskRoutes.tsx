import { Route, Routes, Navigate } from 'react-router-dom'
import { WorkspacePage } from '../pages/WorkspacePage'
import { BoardPage } from '../pages/BoardPage'

export const TaskRoutes = () => {
  return (
    <Routes>
      <Route path="workspace" element={<WorkspacePage />} />
      <Route path="board" element={<BoardPage />} />

      <Route path="/*" element={<Navigate to="/workspace" />} />
    </Routes>
  )
}
