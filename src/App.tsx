import { useRoutes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgetPassword'
import CheckEmail from './Pages/CheckEmail'
import ResetPassword from './Pages/ResetPassword'
import InvalidLink from './Pages/InvalidLink'
import ErrorComponent from './Pages/ErrorMsg'
import SignUp from './Pages/SignUp'
import HomePage from './Pages/HomePage'
import HealthForm from './Pages/HealthTest'
import { theme } from './Theme/Theme'
import LayOut from './components/common/Layout'
import './App.css'
import SummaryScreenPage from './Pages/SummaryScreenPage'

function App() {

  const element = useRoutes([
    {
      path: '/',
      element: <LayOut />,
      children: [
        {
          path: '/home',
          element: <HomePage />
        },
        {
          path: '/healthtest',
          element: <HealthForm />
        }
      ]
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgot',
      element: <ForgotPassword />
    },
    {
      path: '/checkemail/:email',
      element: <CheckEmail />
    },
    {
      path: '/reset',
      element: <ResetPassword />
    },
    {
      path: '/invalid',
      element: <InvalidLink />
    },
    {
      path: '/summary',
      element: <SummaryScreenPage />
    },
    {
      path: '*',
      element: <ErrorComponent />
    }
  ])

  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  </>
}

export default App
