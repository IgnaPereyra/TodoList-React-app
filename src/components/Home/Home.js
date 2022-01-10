import React from 'react';
import './Home.css';
import * as actionsCreators from '../../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todos from '../Todos/Todos.js';


const Home = ({todos, todosInProgress, todosDone}) => {
  return (
    <ul className="home-container">
      <li>
        <h2>TODO</h2>
        <div>
          <Todos
            todos={todos}
          />
        </div>
      </li>
      <li>
        <h2>IN PROGRESS</h2>
        <div>
          <Todos
            todos={todosInProgress}
          />
        </div>
      </li>
      <li>
        <h2>DONE</h2>
        <div>
          <Todos
            todos={todosDone}
          />
        </div>
      </li>
    </ul>
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


export default connect(mapStateToProps, mapDispatchToProps)(Home);
