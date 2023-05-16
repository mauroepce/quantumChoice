import React, { useEffect, useState } from 'react'
import { headerText } from '../utils/texts'
import {ScenariosDisplay, InputSection} from './index'
import { Box, Header } from './base'


function MainContainer() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMdScreen = windowWidth > 768;
  const styleHeight = isMdScreen ? `calc(100vh - ${60 * 4}px)` : `calc(100vh - ${60 * 4}px)`;

  return (
    <Box  className='flex flex-col  w-auto '  >
      <Box className='generator-display grid justify-items-center text-center sm:mt-3  ' >
        
          <Header
          title={headerText.title}
          description={headerText.description}
          />
          <Box className='main-container flex flex-col w-full items-center justify-between mt-3 gap-5 lg:gap-16  md:flex-row  md:w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%]' style={{ height: styleHeight }}>
            <Box className='right order-1 flex-1 w-full md:order-2'>
              <ScenariosDisplay/>
            </Box>
            <Box className='left w-full order-2 md:order-1 md:w-[40%]'>
              <InputSection/>
            </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default MainContainer;