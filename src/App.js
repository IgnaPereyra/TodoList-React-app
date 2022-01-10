import React from 'react'
import './App.css';
import { Route } from "react-router-dom";
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import AddTodo from './components/AddTodo/AddTodo.js';
import TodoDetail from './components/TodoDetail/TodoDetail.js';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { persistTodos } from './actions';


export function App(props) {
  useEffect(()=> {
    const myData = localStorage.getItem('my-todos');
    if(myData){
      props.persistTodos(myData)
    }
  },[])

  useEffect(()=> {
    const myTodos = {
      todos: props.todos,
      todosInProgress: props.todosInProgress,
      todosDone: props.todosDone
    }
    localStorage.setItem('my-todos', JSON.stringify(myTodos));
  });
  return (
    <React.Fragment>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddTodo} />
      <Route path="/edit/:id" component={TodoDetail} />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    todosInProgress: state?.todosInProgress ? state.todosInProgress : [],
    todos: state?.todos ? state.todos : [],
    todosDone: state?.todosDone ? state.todosDone : [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistTodos: data => dispatch(persistTodos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);