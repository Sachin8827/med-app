import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './Theme/Theme'
import ApplicationRoutes from './Routes/Route'
import './App.css'
function App() {

  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApplicationRoutes />
    </ThemeProvider>
  </>
}

export default App
