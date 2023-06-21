
export const initialState = {
    scenarios: [],
    user: {
        register: {},
        logged: {}
    }
};


console.log(initialState.scenarios)


export const apiReducer = (state, action) => {

    
    switch(action.type) {
        case 'GENERATE_SCENARIOS':
            return { ...state, scenarios: action.payload };
        case 'USER_CREATED':
            return { ...state, user: { ...state.user, register: action.payload} };
        default:
            return state;
        
    }
};


