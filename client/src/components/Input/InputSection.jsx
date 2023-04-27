import React from 'react'
import Slider from './Slider/Slider'
import { genereteScenarios } from '../../actions/actions'

function InputSection() {

  const handlerClick = () => {
    genereteScenarios()
  }

  return (
    
        <div className='w-full '>        
        <textarea 
        rows="1"
        placeholder="What would happen if I start programming right now with 19 years..." 
        className="w-full py-3 focus:outline-none pl-2 sm:h-20 xsm:h-20 border border-cyan-400 rounded"
        />
        <Slider className=''/>
        <button
        onClick={handlerClick}
        className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Generates scenarios
        </button>
        </div>
    
  )
}

export default InputSection