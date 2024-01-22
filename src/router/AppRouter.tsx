import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { TaskRoutes } from '../task/routes/TaskRoutes'
import { AuthStatus } from '../auth/enums/authStatus'
import { useSelector } from 'react-redux'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const authStatus = status

  return (
    <Routes>

      {
        (authStatus === AuthStatus.AUTHENTICATED)
          ? <Route path="/*" element={<TaskRoutes />} />
          : <Route path="auth/*" element={<AuthRoutes />} />
      }

      <Route path="/*" element={<Navigate to="/auth/login" />} />

    </Routes>
  )
}
