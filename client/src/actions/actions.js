
import axios from "axios";
import { parsedRealities } from "../utils/utils";
import { toast } from "react-toastify";


const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
console.log(import.meta.env.VITE_APP_API_BASE_URL)

export const genereteScenarios = async (dispatch, inputObject) => {
    
    try {
        const response = await axios.post(`${API_BASE_URL}/api-gateway/chat/generate-realities`, inputObject);
        
        const realities = parsedRealities(response.data.result)
        dispatch({ type: 'GENERATE_SCENARIOS', payload: realities});

    } catch (error) {
        console.error('Error fetching realities:', error)
    }
};

export const signUp = async (dispatch, inputObject) => {

    try {
        const response = await axios.post(`${API_BASE_URL}/api-gateway/user/register`, inputObject);

        const userCreated = response.data;

        dispatch({ type: "USER_CREATED", payload: userCreated});

    } catch (error) {
        console.error("Error trying to register user:", error)

        if(error.response && error.response.status === 400){
            const errorMessage = error.response.data.error;
            console.log(errorMessage)
            toast.warn(errorMessage, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: {
                    backgroundColor: 'white', 
                    color: 'black'
                  },
                });
        }
    }
};

export const signIn = async (dispatch, inputObject) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api-gateway/user/login`, inputObject);

        const userLoggedIn = response.data;

        dispatch({ type: "USER_LOGGED_IN", payload: userLoggedIn});

    } catch (error) {
        console.error("Error trying to sign in user:", error)

        if(error.response && error.response.status === 400){
            const errorMessage = error.response.data.error;
            console.log(errorMessage)
            toast.warn(errorMessage, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: {
                    backgroundColor: 'white', 
                    color: 'black'
                  },
                });
        }
    }
}