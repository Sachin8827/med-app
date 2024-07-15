import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './Theme/Theme'
import './App.css'
import ApplicationRoutes from './Routes/Route'
function App() {



  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApplicationRoutes />

    </ThemeProvider>
  </>
}

export default App
