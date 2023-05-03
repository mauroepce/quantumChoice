import React, { useState } from 'react'
import InputSection from '../Input/InputSection'
import ScenariosDisplay from '../Scenarios/ScenariosDisplay'


function GeneratorDisplay() {


  return (
    <div  className='flex flex-col  w-auto '  >
      <div className='generator-display grid justify-items-center text-center ' >
        <div className='content-header sm:h-auto xsm:h-auto sm:max-h-[150px]'>
          <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl filter shadow-2xl ' >Experience the power of decision-making.</h1>
          <p className='text-base my-5 text-center sm:text-sm'>Describe your decision dilemma in 200 characters or less, then select a time frame to explore possible outcomes.</p>
        </div>
          <div className=' xsm:flex-col sm:flex-col xsm:w-full sm:w-full md:flex lg:flex xl:flex items-center justify-between xl:mt-20 lg:mt-10 md:mt-5 sm:mt-3  gap-11 sm:h-screen xsm:h-screen' style={{ height: `calc(100vh - ${50 * 4}px)` }}>
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

export default GeneratorDisplay