import React, { useState, useReducer, useCallback } from 'react';

type ToDo = {
  id: number;
  description: string;
}
type addItemPayload = Required<ToDo>;
type removeItemPayload = Pick<ToDo, 'id'>

interface TestHookI {
  toDos: ToDo[];
  addToDos: (todo: addItemPayload) => void;
  removeToDo: (id: number) => void;
}

enum DispatchTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

type DispatchProps = {
  type: DispatchTypes;
  id? : number;
  toDo?: ToDo;
}


const handleDispatch = (toDos: ToDo[], payload: DispatchProps) => {
  switch (payload.type) {
    case DispatchTypes.ADD:
      if (payload?.toDo) {
        return [...toDos, payload.toDo];
      }
    case DispatchTypes.REMOVE:
      if (payload.id) {
        const filteredToDos = toDos.filter((todo) => todo.id !== payload.id);
        return filteredToDos;
      }
    default:
      return toDos;
  }
}


const useTestHook = (): TestHookI => {
  const [ toDos, dispatch ] = useReducer(handleDispatch, [])

  const addToDos = (newToDo: ToDo): void => {
    dispatch({ type: DispatchTypes.ADD, toDo: newToDo });
  };

  const removeToDo = (id: number): void => {
    dispatch({ type: DispatchTypes.REMOVE, id });
  }

  return { toDos, addToDos, removeToDo }
}


export default useTestHook;
