import React, {useReducer} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App'
import ApiContext from './reducer-context/apiContext';
import { apiReducer, initialState } from './reducer-context/apiReducer';
import './index.css'


const Main = () => {

  const [state, dispatch] = useReducer(apiReducer, initialState)

  return (
    <Router>
      <ApiContext.Provider value={{state, dispatch}}>
        <App />
      </ApiContext.Provider>
    </Router>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Main />);
