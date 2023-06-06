import { Route, Routes } from 'react-router-dom'
import Box from "./components/base/Box.jsx"
import Home from './components/home/Home.jsx'
import Footer from './components/shared/Footer.jsx'
import NavBar from './components/shared/NavBar.jsx'
import {Register} from "./components/auth"

function App() {
  

  return (
    <div className='h-screen flex flex-col justify-between gap-0'>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>     
      <Box className="hidden md:block h-0">
        <Footer  />
      </Box>
    </div>
  )
}

export default App
