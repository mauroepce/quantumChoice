
export const initialState = {
    scenarios: [],
};


console.log(initialState.scenarios)


export const apiReducer = (state, action) => {

    
    switch(action.type) {
        case 'GENERATE_SCENARIOS':
            return { ...state, scenarios: action.payload };
        default:
            return state;
    }
};


