import React, { useContext} from "react";
import ApiContext from "../../reducer-context/apiContext";

function ScenariosDisplay() {
  
  const {state} = useContext(ApiContext);
  const {scenarios} = state;
  console.log(scenarios)

  return (
    <div className="main-container w-full h-full flex items-center justify-center border border-cyan-400 rounded">

      <div className="scenarios-container text-center">
        {Array.isArray(scenarios) && scenarios.length ? (
          <div className="grid grid-cols gap-4 w-80">
            {scenarios.map((scenario, index) => {
              // Get the first key of the object (e.g. 'Reality1', 'Reality2')
              const key = Object.keys(scenario)[0];
              const text = scenario[key]
              
              return (
                <div
                  key={index}
                  className="bg-gray-400 p-4 rounded shadow-md transition duration-500 ease-in-out transform "
                >
                  {text}
                </div>
              );
            })}
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