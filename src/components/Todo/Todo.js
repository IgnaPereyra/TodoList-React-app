import React from 'react';
import { Link } from 'react-router-dom';

export function Todo(props) {
  return (
    <div>
      <Link to={`/edit/${props.id}`}>
        {props.title}
      </Link>
    </div>
  )
};

export default Todo;