
import axios from "axios";
import { parsedRealities } from "../utils/utils";


const genereteScenariosURL = "http://localhost:3001/api-gateway/chatRoutes/generate-realities"


export const genereteScenarios = async (dispatch, inputObject) => {
    
    try {
        const response = await axios.post(genereteScenariosURL, inputObject);
        
        console.log(response.data.result)
        const realities = parsedRealities(response.data.result)
        dispatch({ type: 'GENERATE_SCENARIOS', payload: realities});

    } catch (error) {
        console.error('Error fetching realities:', error)
    }
};