import React, { useState, useContext, createContext } from 'react';
const AllContext = createContext(null);
export const AllContextProvider = ({ children }) => {
  // const [todoItem, setTodoItem] = useState([
  // {
  //   todo: 'Learn React.js',
  //   create_time: '2022/12/23 18:59:23',
  //   done: true,
  // },
  // {
  //   todo: 'Learn Angular.js',
  //   create_time: '2022/12/25 18:59:23',
  //   done: false,
  // },
  // {
  //   todo: 'Learn photoShop',
  //   create_time: '2022/12/20 18:59:23',
  //   done: false,
  // },
  // {
  //   todo: 'Learn node.js',
  //   create_time: '2022/11/23 18:59:23',
  //   done: true,
  // },
  // ]);
  const [todoItem, setTodoItem] = useState(
    window.localStorage.getItem('myTodoList')
      ? JSON.parse(window.localStorage.getItem('myTodoList'))
      : []
  );
  const [inputWord, setInputWord] = useState('');
  const [moveDoneThingsToggle, setMoveDoneThingsToggle] = useState(false);
  const [displayTodoItem, setDisplayTodoItem] = useState([]);
  const [percentage, setPercentage] = useState(0);
  return (
    <AllContext.Provider
      value={{
        todoItem,
        setTodoItem,
        inputWord,
        setInputWord,
        moveDoneThingsToggle,
        setMoveDoneThingsToggle,
        displayTodoItem,
        setDisplayTodoItem,
        percentage,
        setPercentage,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export const useAllContext = () => useContext(AllContext);
