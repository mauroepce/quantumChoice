import React, { useState } from "react";

function ScenariosDisplay({texts, showResults}) {
  


  return (
    <div className="w-full h-full flex items-center justify-center border border-cyan-400 rounded">
      <div className="text-center">
        {showResults ? (
          <div className="grid grid-cols gap-4 w-80">
            {texts.map((text, index) => (
              <div
                key={index}
                className="bg-gray-400 p-4 rounded shadow-md transition duration-500 ease-in-out transform "
              >
                {text}
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="text-xl mb-4">Your possible scenarios will appear here</p>
            <div className="bg-gray-200">
              {/* Aquí puedes agregar la imagen */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ScenariosDisplay;