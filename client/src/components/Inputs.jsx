import React, { useContext, useState } from 'react'
import Slider from './Slider'
import { genereteScenarios } from '../actions/actions'
import ApiContext from '../reducer-context/apiContext';

function InputSection() {

  const [textAreaValue, setTextAreaValue] = useState('');
  const [timeValue, setTimeValue] = useState(0.6);
  const {dispatch} = useContext(ApiContext);
  
  const handlerTextArea = (e) => {
    setTextAreaValue(e.target.value)
  }

  const handlerClick = () => {
    genereteScenarios(dispatch, {
      prompt: textAreaValue,
      time: timeValue
    })
  }

  return (
    
        <div className='w-full '>        
        <textarea 
        rows="1"
        value={textAreaValue}
        onChange={handlerTextArea}
        maxLength={500}
        placeholder="What would happen if I start programming right now with 19 years... (max characters: 500)" 
        className="w-full py-3 focus:outline-none pl-2 sm:h-20 xsm:h-20 border border-cyan-400 rounded"
        />
        <Slider 
          timeValue={timeValue}
          setTimeValue={setTimeValue}
          className=''
        />
        <button
        onClick={handlerClick}
        disabled={textAreaValue.length === 0 || textAreaValue.length > 500 }
        className={`w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
          textAreaValue.length === 0 || textAreaValue.length > 500
            ? 'bg-green-300 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'
        }`}
        >
          Generates scenarios
        </button>
        </div>
    
  )
}

export default InputSection