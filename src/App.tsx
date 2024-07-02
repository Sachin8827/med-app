
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import ForgotPassword from './Pages/Forgot'


function App() {



  return <>
    <Routes>
      <Route path='/' Component={Login} />
      <Route path='/forgot' Component={ForgotPassword} />
    </Routes>


  </>
}

export default App
