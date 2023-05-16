import React, { useContext, useState} from "react";
import ApiContext from "../reducer-context/apiContext";
import { Box, Button, Card, Option, Text } from "./base";

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
    <Box className="main-container w-full h-full flex items-center justify-center border border-cyan-400 rounded">

      <Box className="scenarios-container text-center flex justify-center items-center md:min-h-[400px]">
        {Array.isArray(scenarios) && scenarios.length ? (
          <>
            {!selectedReality ? (
              <Box className="grid grid-cols gap-4 w-80">
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
              </Box>
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
            <Box className="w-[80%]">
              <Text 
              children={"Your possible scenarios will appear here"}
              />
              <Box className="bg-gray-200">
                {/* Aquí puedes agregar la imagen */}
            </Box>
            </Box>
          </>
        )}
      </Box>
     
    </Box>
  );
}

export default ScenariosDisplay;