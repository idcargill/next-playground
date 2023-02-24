import React, { useContext } from 'react';
import { ToDoContext } from './testContext';

const ToDoListContainer = () => {
  const { toDos } = useContext(ToDoContext);

  return (
    <div style={{ margin: '10px', padding: '10px', border: '1px solid green'}}>
      <h3>Consuming Context</h3>
      <ul>

      {toDos.map((todo, idx) => (
        <li key={idx}>
          {todo.description}
        </li>
      ))}
      </ul>
    </div>

  )
}

export default ToDoListContainer;
