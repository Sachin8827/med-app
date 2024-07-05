
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import ForgotPassword from './Pages/Forgot'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import CheckEmail from './Pages/CheckEmail'
import ResetPassword from './Pages/ResetPassword'
import InvalidLink from './Pages/InvalidLink'
import ErrorComponent from './Pages/ErrorMsg'
import SignUp from './Pages/SignUp'
import HomePage from './Pages/HomePage'




function App() {

  const theme = createTheme({
    status: {
      inputError: "#C5141414",
      inputBg: '#F0F1F4',
      alertSuccess: '#E7F4D1'
    },
    palette: {
      error: {
        main: '#C51414',
      },
      primary: {
        main: '#076EB0',
        light: '#E6F4F9'
      }

    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            [`@media (min-width:600px)`]: {
              // paddingLeft: 0,
              // paddingRight: 0,
            },
          }
        }
      }
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      h5: {
        lineHeight: '32px',
        fontWeight: 600,
        color: '#2F2F32',
      },

      body2: {
        fontSize: '16px',
        fontWeight: 400,
        lineHieght: "24px",
        color: '#707070'
      },
      subtitle2: {
        fontWeight: 600,
        lineHeight: '26px',
        fontSize: '18px'
      }

    },
  })

  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/login' Component={Login} />
        <Route path='/forgot' Component={ForgotPassword} />
        <Route path='/checkemail/:email' Component={CheckEmail} />
        <Route path='/reset' Component={ResetPassword} />
        <Route path='/invalid' Component={InvalidLink} />
        <Route path='*' Component={ErrorComponent} />
        <Route path='/signup' Component={SignUp} />
      </Routes>

    </ThemeProvider>


  </>
}

export default App
