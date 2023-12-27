import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MockTest from './components/MocktestComp/MockTest'
import VideoTut from './components/VideoTutorialComp/VideoTut'
import MasterCompetitiveHome from './components/MasterCompetitiveComp/MasterCompetitiveHome'
import FullStackHome from './components/FullStackProgram/FullStackHome'
import ElevationAcademyHome from './components/ElevationAcademyComp/ElevationAcademyHome'
import Home from './components/Home/Home'
import Login_Signup from './components/Login_Signup/Login_Signup'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mock-test' element={<MockTest />} />
          <Route path='/preparation-videos' element={<VideoTut />} />
          <Route path='/master-competitive-programming' element={<MasterCompetitiveHome />} />
          <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStackHome />} />
          <Route path='/mern-stack-web-development-career' element={<ElevationAcademyHome />} />
          <Route path='/login' element={<Login_Signup />} />
          <Route path='/signup' element={<Login_Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
