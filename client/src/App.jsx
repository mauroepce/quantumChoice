
import Box from "./components/base/Box.jsx"
import {Footer, MainContainer} from "./components/index.jsx"
import NavBar from "./components/NavBar"


function App() {
  

  return (
    <div className='h-screen flex flex-col justify-between gap-0'>
      <NavBar />
      <MainContainer />
      <Box className="hidden md:block h-0">
        <Footer  />
      </Box>
    </div>
  )
}

export default App
