import React, { createContext } from 'react';

import { ToDo } from './useTestHook';
import useTestHook from './useTestHook';

interface ToDoContextI {
  toDos: ToDo[];
  addToDos: (todo: ToDo) => void;
  removeToDo: (id: number) => void;
}

const DefaultToDoContext: ToDoContextI = {
  toDos: [],
  addToDos: (todo: ToDo) => {},
  removeToDo: (id: number) => {}, 
}

export const ToDoContext = createContext(DefaultToDoContext);

export const ToDoWrapper = ({ children }: { children: React.ReactNode}) => {
  const {addToDos, removeToDo, toDos } = useTestHook();

  const ctx: ToDoContextI = {
    toDos,
    addToDos,
    removeToDo,
  }

return (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    margin: 'auto',
    padding: '10px',
  }}>
    <ToDoContext.Provider value={ctx}>
      {children}
    </ToDoContext.Provider>
  </div>
)
};
