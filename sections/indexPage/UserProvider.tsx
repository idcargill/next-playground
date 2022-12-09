import React, { useState, useCallback } from 'react';


type UserContext = {
  stateArr: string[],
  appendArray: React.Dispatch<any>,
  clearArray: React.Dispatch<null>,
  name?: string,
}

interface ContextProps {
  children: JSX.Element;
}


export const UserContext = React.createContext({} as UserContext);

const UserContextProvider = ({ children }:ContextProps) => {
  const [stateArr, setStateArr ] = useState<string[]>([]);

  const appendArray = useCallback((value:string) => {
    const newArr = [...stateArr, value]
    setStateArr(newArr);
  }, [stateArr]);

  const clearArray = () => {
    setStateArr([]);
  }


  const value: UserContext = {
    stateArr,
    appendArray,
    clearArray,
    name: 'Ian Cargill',
  }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
