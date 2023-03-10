import React, { useEffect, useRef } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoListBlock.scss';
import { useAllContext } from '../AllContext/AllContext';
function TodoListBlock() {
  const { displayTodoItem } = useAllContext();
  const theLastTodo = useRef();
  useEffect(() => {
    theLastTodo.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayTodoItem.length]);

  return (
    <div className="TodoListBlock">
      <TodoListItem />
      <div ref={theLastTodo}></div>
    </div>
  );
}

export default TodoListBlock;
