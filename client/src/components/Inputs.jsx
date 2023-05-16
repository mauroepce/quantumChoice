import React, { useContext, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { genereteScenarios } from '../actions/actions'
import ApiContext from '../reducer-context/apiContext';
import { Box, Slider } from './base';

function InputSection() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [timeValue, setTimeValue] = useState(0.6);
  const [errorMessage, setErrorMessage] = useState('');
  const {dispatch} = useContext(ApiContext);
  
  const handlerTextArea = (e) => {
    const value = e.target.value;
    setTextAreaValue(value);

    if (value.length < 200) {
      setErrorMessage('Your input should be at least 200 characters.');
    } else {
      setErrorMessage('');
    }
  }

  const handlerClick = () => {
    if (textAreaValue.length >= 200 && textAreaValue.length <= 500) {
      genereteScenarios(dispatch, {
        prompt: textAreaValue,
        time: timeValue
      });
      setErrorMessage('');
    } else if (textAreaValue.length === 0) {
      setErrorMessage('Please complete the text area before sending.');
    }
  }

  return (
    <Box className='w-full '>    
    <TextareaAutosize    
        rows={3}
        value={textAreaValue}
        onChange={handlerTextArea}
        maxLength={500}
        placeholder="What would happen if I start programming right now with 19 years... (max characters: 500)" 
        className="w-full py-3 md:h-32 focus:outline-none pl-2 h-20 border border-cyan-400 rounded max-h-40 leading-[1.2] tracking-wide text-[14px] xs:text-[11px] sm:text-[15px] md:text-[16px] font-normal"
      />
      {errorMessage.length > 0 && 
        <p className="text-red-300 text-sm mb-5">{errorMessage}</p>
      }
      
      <Slider 
        timeValue={timeValue}
        setTimeValue={setTimeValue}
        className=''
      />
      <button
        onClick={handlerClick}
        disabled={textAreaValue.length === 0 || textAreaValue.length > 500 }
        className={`w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 `}
      >
        Generates scenarios
      </button>
    </Box>
  )
}

export default InputSection;