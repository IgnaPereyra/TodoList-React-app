import React from 'react';
import Todo from '../Todo/Todo.js';

export function Todos(props) {
  return (
    <div>
      {props.todos.map(todo => <Todo
        title={todo.title}
        id={todo.id}
        key={todo.id}
      />)}
    </div>
  )
};

export default Todos;