import React, { useState, useContext } from 'react';
import { ToDo } from './useTestHook';
import { ToDoContext } from './testContext';

const TestPageLayout = () => {
  const [ title, setTitle ] = useState('Do This Stuff');
  const [ inputValue, setInputValue ] = useState('');

  const {toDos , addToDos, removeToDo} = useContext(ToDoContext);

  const index = toDos.length + 1;

  const handleRemove = (todo: ToDo) => {
    removeToDo(todo.id)
  }

  const handleSubmit = (toDo: ToDo) => {
    setInputValue('');
    addToDos(toDo);
  }

  return (
    <div style={{ padding: '10px', margin: '10px', border: '1px solid green'}}>
      <div >{title}</div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={() => handleSubmit({ id: index, description: inputValue })} >Add</button>
      {toDos.length > 0 
        ? toDos.map((todo) => (
          <li key={todo.id} onClick={() => handleRemove(todo)}>{todo.description}</li>
          ))
          : null
        }
    </div>
  )
}

export default TestPageLayout;
