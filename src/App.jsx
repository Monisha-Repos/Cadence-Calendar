import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/sign-up'
import Calendar from './pages/calendar'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
     <>
          {currentPage == 'home' && <Home setCurrentPage={setCurrentPage} />}
          {currentPage == 'login' && <Login setCurrentPage={setCurrentPage} />}
          {currentPage == 'sign-up' && <SignUp setCurrentPage={setCurrentPage} />}
          {currentPage == 'calendar' && <Calendar setCurrentPage={setCurrentPage} />}
    </>
  )
}

export default App
