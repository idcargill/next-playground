import React, { useContext, useState } from 'react';
import { UserContext } from './UserProvider';



const Clear = () => {
  const { clearArray } = useContext(UserContext);
  return (
    <button onClick={() => clearArray(null)}>Clear</button>
  )
}


export const SomeComponent = () => {
  const contextValue = useContext(UserContext);
  
    const Form = () => {
      const [input, setInput] = useState('');
      
      const handleAdd = () => {
        contextValue.appendArray(input);
      }

      const handeChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        setInput(e?.currentTarget?.value)
      }

      return (
        <form action="/">
          <label htmlFor="item">Input a new Item</label>
          <input type="text" name="item" value={input} onChange={(e) => handeChange(e)}></input>
          <button onClick={handleAdd}> + </button>
        </form>
      )
    }

  
  return (
    <>
      <h1>I will use Context...{contextValue.name}</h1>
      <Form/>

      <div style={{ overflow: 'scroll', height: '200px', backgroundColor: '#c9c94b', borderRadius: '5px', padding: '5px', marginTop:'10px', width: '300px' }} >
        <ul>
          {contextValue.stateArr.map((value) => (
            <li key={`${value} 100`}>{value}</li>
            ))
          }
        </ul>
      </div>

      <Clear />
    </>
  )
}