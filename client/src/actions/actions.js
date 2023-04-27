import React, {useContext} from 'react';
require("dotenv").config();
import axios from "axios";
import ApiContext from '../reducer-context/apiContext';

const genereteScenariosURL = process.env.URL_GENERETE_SCENARIOS;

const {dispatch} = useContext(ApiContext);

export const genereteScenarios = async () => {
    try {
        const response = await axios.get(genereteScenariosURL);
        dispatch({ type: 'GENERATE_SCENARIOS', payload: response.data});
    } catch (error) {
        console.error('Error fetching realities:', error)
    }
};