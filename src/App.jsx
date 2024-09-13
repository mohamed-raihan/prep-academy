import { Route, Routes } from 'react-router-dom'
import './App.css'
import Classroom from './components/classroom/Classroom'
import WhystudyWithus from './components/whystudywithus/WhystudyWithus'
import LandingPage from './layout/LandingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </>
  )
}

export default App
