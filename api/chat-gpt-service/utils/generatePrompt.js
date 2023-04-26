
function generateQuantumChoicePrompt(decision, time) {

    const trimmedDecision = decision.trim();
    
    return [{
        "role": "system", 
        "content": `Generates two different results of alternate realities as a result of a prompt. follow this example :

    prompt: I want to go on a trip with my savings to Europe. I am 25 years old, I have worked for 5 years without taking a break as a developer. I live in my parents house.
    Please provide two alternate realities that could unfold 0.6 year after making my decision.
    response: Realities: [
        {Reality 1: 6 months after traveling to Europe, you find yourself living in a thriving city in southern Europe. Leveraging your language skills and previous work experience, you manage to land a job at a leading international technology company.  },
        {Reality 2: After 6 months in Europe, you settle in a historic port city. You discover opportunities in the tourism sector and decide to start your own sustainable tourism business. },
    ]
  `} , 
    { 
    "role": "user",
    "content": `${trimmedDecision}. Please provide two alternate realities that could unfold ${time} year after making my decision.`
    }];
  }

  module.exports = {generateQuantumChoicePrompt}