import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthPage } from '../pages/AuthPage'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
