import React from 'react'
import { headerText } from '../utils/texts'
import Header from './base/header'
import {ScenariosDisplay, InputSection} from './index'


function MainContainer() {


  return (
    <div  className='flex flex-col  w-auto '  >
      <div className='generator-display grid justify-items-center text-center ' >
        
          <Header
          title={headerText.title}
          description={headerText.description}
          />
          <div className='main-container xsm:flex-col flex-col xsm:w-full w-full md:flex lg:flex xl:flex items-center justify-between xl:mt-20 lg:mt-10 md:mt-5 mt-3  gap-11 h-screen xsm:h-screen' style={{ height: `calc(100vh - ${50 * 4}px)` }}>
            <div className='right xsm:order-1 sm:order-1 md:order-2 lg:order-2 xl:order-2 flex-1 w-full '>
              <ScenariosDisplay/>
            </div>
            <div className='left xsm:w-full sm:w-full xsm:order-2 sm:order-2 md:order-1 lg:order-1 xl:order-1'>
              <InputSection/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainContainer;