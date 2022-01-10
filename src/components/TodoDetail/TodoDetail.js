import React from 'react';
import * as actionsCreators from '../../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import './TodoDetail.css';

function TodoDetail(props) {
  const todoId = parseInt(props.match.params.id);
  
  let allTodos = props.todos.concat(props.todosDone, props.todosInProgress);

  let todoObj = allTodos.filter(ele => ele.id === todoId)

  if(!todoObj[0]) {
    return (
      <div className='modal-background'>
        <div className='modal-container'>
          <div className="modal-header">
            <img src="https://cdn2.iconfinder.com/data/icons/round-interface-1/217/50-512.png" alt="Trashcan icon"></img>
          </div>
          <div className='modal-title'>
            <h1>This item has been removed.</h1>
          </div>
          <div className="modal-body">
          <p>Please return to the main page.</p>
        </div>
        <div className="modal-footer">
        <Link exact to='/'><button>Home</button></Link>
        </div>
        </div>
      </div>
    )
  }else
return (
    <div className="todo-detail-div">
      <div className="todo-detail-container">
      <h3>Todo: {todoObj[0].title}</h3>
      <h3>Description: {todoObj[0].description}</h3>
      <h3>Place: {todoObj[0].place}</h3>
      <h3>Date: {todoObj[0].date}</h3>
      <h3>Status: {todoObj[0].status}</h3>
      <div>
        <button id="inprogress-btn" onClick={() => props.toInProgress(todoObj)}>In progress</button>
        <button id="todone-btn" onClick={() => props.toDone(todoObj)}>Todo Done</button>
      </div>
        <button id="remove-btn" onClick={() => props.removeTodo(todoId)}>Remove</button>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    todosInProgress: state?.todosInProgress ? state.todosInProgress : [],
    todos: state?.todos ? state.todos : [],
    todosDone: state?.todosDone ? state.todosDone : [],
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);