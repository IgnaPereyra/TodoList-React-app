const initialState = {
  todos: [],
  todosInProgress: [],
  todosDone: [],
};

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'PERSIST_TODOS':
      const jsonTodos = JSON.parse(action.payload);
      return {
        todos: jsonTodos.todos,
        todosInProgress: jsonTodos.todosInProgress,
        todosDone: jsonTodos.todosDone
      }
    case 'ADD_TODO':
      let item = action.payload[0];
      item.id = action.id
      return {
        ...state,
        todos: state.todos.concat([item])
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(el => el.id !== action.payload),
        todosDone: state.todosDone.filter(el => el.id !== action.payload),
        todosInProgress: state.todosInProgress.filter(el => el.id !== action.payload),
      }
    case 'TO_IN_PROGRESS':
      let itemProgress = action.payload[0];
      itemProgress.status = 'In Progress'
      return {
        ...state,
        todosDone: state.todosDone.filter(el => el.status !== itemProgress.status), 
        todos: state.todos.filter(el => el.status !== itemProgress.status),
        todosInProgress: state.todosInProgress.concat([itemProgress])
      }
    case 'TO_DONE':
      let itemDone = action.payload[0];
      itemDone.status = 'Done'
      return {
        ...state,
        todosInProgress: state.todosInProgress.filter(el => el.status !== itemDone.status),
        todos: state.todos.filter(el => el.status !== itemDone.status),
        todosDone: state.todosDone.concat([itemDone])
      }
  }
}



export default todos;
