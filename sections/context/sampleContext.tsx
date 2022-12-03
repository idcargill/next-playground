import React, { ReactNode, useReducer } from 'react';


let ctxValue = {
  status: 'NEW',
  name: 'Ian',
  pet: 'cat',
  updateState: (args:any) => {},
};


export const SampleContext = React.createContext(ctxValue);

const { Provider, Consumer } = SampleContext;


const SampleContextReducer = (state:any, action:any) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        status: 'Start',
        name: 'Start the Chicken',
        pet: 'Shark',
      };
    case 'END':
      return {
        ...state,
        status: 'END',
        name: 'I do not like chicken',
        pet: 'Fluffykins',
      }
    default: 
      return {
        state
      }
  } 
}

const SampleContextProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(SampleContextReducer, ctxValue);
  state.updateState = dispatch;

  return (
    <SampleContext.Provider value={state}>{children}</SampleContext.Provider>
  );
};

export {
  SampleContextProvider,
  Consumer as SampleContextConsumer,
}
