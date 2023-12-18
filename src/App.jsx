import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MockTest from './components/MocktestComp/MockTest'
import VideoTut from './components/VideoTutorialComp/VideoTut'
import MasterCompetitiveHome from './components/MasterCompetitiveComp/MasterCompetitiveHome'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mock-test' element={<MockTest />} />
          <Route path='/preparation-videos' element={<VideoTut />} />
          <Route path='/master-competitive-programming' element={<MasterCompetitiveHome/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
