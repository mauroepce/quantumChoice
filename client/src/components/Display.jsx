import React, { useContext, useState} from "react";
import ApiContext from "../reducer-context/apiContext";
import Option from "./base/Option";
import Card from "./base/card";
import Button from "./base/Button";

function ScenariosDisplay() {
  
  const {state} = useContext(ApiContext);
  const {scenarios} = state;
  const [selectedReality, setSelectedReality] = useState(null);

  const handleOptionClick = (reality) => {
    setSelectedReality(reality);
  }

  const handleBackClick = () => {
    setSelectedReality(null);
  };

  return (
    <div className="main-container w-full h-full flex items-center justify-center border border-cyan-400 rounded">

      <div className="scenarios-container text-center">
        {Array.isArray(scenarios) && scenarios.length ? (
          <>
            {!selectedReality ? (
              <div className="grid grid-cols gap-4 w-80">
                {scenarios.map((scenario, index) => {
                  // Get the first key of the object (e.g. 'Reality1', 'Reality2')
                  const key = Object.keys(scenario)[0];
                  const text = scenario[key]
                  
                  return (
                    <Option
                      key={index}
                      label={key}
                      onClick={() => handleOptionClick(scenario[key])}
                    />
                  );
                })}
              </div>
            ) : (
              <>
                <Card 
                  text={selectedReality}
                />
                <Button
                  text="Back to options"
                  onClick={handleBackClick}
                />
              </>
            )}
          </>
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