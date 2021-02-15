import React, {createContext, useCallback, useState, useContext} from 'react';

import {TodoContextData} from './interfaces';

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

const TodoProvider: React.FC = ({children}) => {
  const [todo, setTodo] = useState({value1: 0, value2: 0});

  const settingIncrement = useCallback((type) => {
    if(type === 1 ){
      setTodo(state => {
        return {...state, value1: state.value1 + 1};
      });
    }

    if(type === 2 ){
      setTodo(state => {
        return {...state, value2: state.value2 + 1};
      });
    }
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todo,
        settingIncrement,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

function useTodo(): TodoContextData {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}
export {TodoProvider, useTodo};
