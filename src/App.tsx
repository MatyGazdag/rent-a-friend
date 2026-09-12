import { Route, Routes } from 'react-router-dom'

import './App.css'

import HomePage from './pages/home'
import SideBar from './components/sidebar'
import SibeBarItem from './components/sidebar/sidebar_item'
import BookingPage from './pages/booking'
import LoginPage from './pages/login'
import RegistrationPage from './pages/registration'

function App() {
  return (
    <>
      <SideBar>
        <SibeBarItem name='Home' path='/'/>
        <SibeBarItem name='Rent' path='/booking'/>
        <SibeBarItem name='Login' path='/login'/>
        <SibeBarItem name='Register' path='/register'/>
      </SideBar>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
      </Routes>
    </>
  )
}

export default App
