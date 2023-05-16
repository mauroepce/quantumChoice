
function generateQuantumChoicePrompt(decision, time) {

    const trimmedDecision = decision.trim();
    
    return [{
        "role": "system", 
        "content": `Generates two different results of alternate realities as a result of a prompt. follow this example :

        prompt: I want to create a website to earn money. I'm in my 25. I have a job I hate. Don't have a girlfriend. I work on macDonald. I have fears about start a new thing.
        Please provide two alternate realities that could unfold 0.6 year after making my decision. :
        response: (Keep the following format to answer) 
            {"Realities": [
            {"Reality1": "One year after starting your website, you find yourself running a successful online business. You have quit your job at McDonald's and have hired a small team. Your newfound success has boosted your confidence levels and you have started dating someone who shares your passion for entrepreneurship"  },
            {"Reality2": "One year after starting your website, you haven't seen the results you were hoping for. You are struggling to make ends meet. You are plagued by self-doubt and regret leaving your steady job at McDonald's. This has caused you to isolate yourself, and you are still without a girlfriend. However, despite these challenges, you remain committed to making your website and to work hard towards achieving your goal." },
        ]}
        `
      } , 
      { 
      "role": "user",
      "content": `${trimmedDecision}. Please provide two alternate realities that could unfold ${time} year after making my decision.`
      }
    ];
}

  module.exports = {generateQuantumChoicePrompt}

