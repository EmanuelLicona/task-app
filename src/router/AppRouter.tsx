import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { TaskRoutes } from '../task/routes/TaskRoutes'
import { AuthStatus } from '../auth/enums/authStatus'

export const AppRouter = () => {

  const authStatus = AuthStatus.NOT_AUTHENTICATED + ''

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
