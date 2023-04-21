import React, { useState } from 'react'

function Slider() {

  const [selectedValue, setSelectedValue] = useState(0.6);

  const handleChange = (event) => {
    const value = parseFloat(event.target.value);
    setSelectedValue(value);
    
  }
  
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="range"
          min="0.6"
          max="1"
          step="0.4"
          value={selectedValue}
          onChange={handleChange}
          className="w-full h-1 bg-gray-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-0"
          style={{ background: 'transparent' }}
        />
        {/* <div
          className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2 rounded-full w-4 h-4 bg-blue-500"
          style={{ left: selectedValue === 0.6 ? '0%' : '100%' }}
        ></div> */}
      </div>
      <div className="flex justify-between text-sm mt-1">
        <span>0.6 years</span>
        <span>1 year</span>
      </div>
      <p className="mt-2 mb-2">
        Selected value: {selectedValue} {selectedValue === 1 ? 'year' : 'years'}
      </p>
    </div>
  )
}



export default Slider

