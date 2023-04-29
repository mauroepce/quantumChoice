
import axios from "axios";


const genereteScenariosURL = "http://localhost:3001/api-gateway/chatRoutes/generate-realities"


export const genereteScenarios = async (dispatch, inputObject) => {
    console.log(inputObject)
    try {
        const response = await axios.post(genereteScenariosURL, inputObject);
        console.log(response.data)
        dispatch({ type: 'GENERATE_SCENARIOS', payload: response.data.results});
    } catch (error) {
        console.error('Error fetching realities:', error)
    }
};