import { Route, Routes } from 'react-router-dom'
import Box from "./components/base/Box.jsx"
import Home from './components/home/Home.jsx'
import Footer from './components/shared/Footer.jsx'
import NavBar from './components/shared/NavBar.jsx'
import {ForgotPass, Login, Register} from "./components/auth"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  
  return (
    <div className='h-screen flex flex-col justify-between gap-0'>
      <ToastContainer />
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPass" element={<ForgotPass />} />
        </Routes>     
     
      <Box className="hidden md:block h-0">
        <Footer  />
      </Box>
    </div>
  )
}

export default App
