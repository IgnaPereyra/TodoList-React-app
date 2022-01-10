let todoId = 0

export const addTodo = (payload) => {
    return {type: 'ADD_TODO', id: ++todoId ,payload};
};

export const removeTodo = (payload) => {
    return {type: 'REMOVE_TODO', payload};
};

export const toInProgress = (payload) => {
    return {type: 'TO_IN_PROGRESS', payload};
};

export const toDone = (payload) => {
    return {type: 'TO_DONE', payload};
};

export const persistTodos = (payload) => {
    return {type: 'PERSIST_TODOS', payload};
}
