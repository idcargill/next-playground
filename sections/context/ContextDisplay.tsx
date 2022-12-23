import React, { useContext, useEffect } from 'react';
import { SampleContext } from './sampleContext';



const ContextDisplay = () => {
  const contextValues= useContext(SampleContext);
  const { name, pet, updateState } = contextValues; 

  return (
    <>
      <h3>Context Display</h3>
      <ul>
        <li>{name}</li>
        <li>{pet}</li>
        <li>
          <button onClick={() => updateState({type: 'START'})}>
            Update State Start
          </button>
        </li>
        <li>
          <button onClick={() => updateState({type: 'END'})}>
            Update State End
          </button>
        </li>
      </ul>
    </>
  )
}

export default ContextDisplay;
