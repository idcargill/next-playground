import React, { useState } from 'react';
import useTestHook from './useTestHook';

const TestPageLayout = () => {
  const [ title, setTitle ] = useState('Do This Stuff');
  const [ inputValue, setInputValue ] = useState('');
  const { toDos, addToDos, removeToDo } = useTestHook();

  const index = toDos.length + 1;

  return (
    <>
      <div>{title}</div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={() => addToDos({ id: index, description: inputValue })} >Add</button>
      {toDos.length > 0 
        ? toDos.map((todo) => (
          <li key={todo.id} onClick={() => removeToDo(todo.id)}>{todo.description}</li>
          ))
          : null
        }
    </>
  )
}

export default TestPageLayout;
