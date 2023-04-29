import React, { useState } from 'react'

function Slider({timeValue, setTimeValue}) {


  const handleChange = (event) => {
    const value = parseFloat(event.target.value);
    setTimeValue(value);
  }
  
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="range"
          min="0.6"
          max="1"
          step="0.4"
          value={timeValue}
          onChange={handleChange}
          className="w-full h-1 bg-gray-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-0"
          style={{ background: 'transparent' }}
        />
       
      </div>
      <div className="flex justify-between text-sm mt-1">
        <span>6 months</span>
        <span>1 year</span>
      </div>
      <p className="mt-2 mb-2">
        Selected value: {timeValue === 0.6 ? timeValue*10 : timeValue} {timeValue === 1 ? 'year' : 'months'}
      </p>
    </div>
  )
}



export default Slider

