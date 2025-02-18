import { Route } from 'react-router'
import LoginPage from '../pages/Auth'

export const publicRoutes = (
  <>
    <Route path='dang-nhap' element={<LoginPage />} />
  </>
)
