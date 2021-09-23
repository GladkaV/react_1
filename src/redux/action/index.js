export const ADD_TODOS = 'ADD_TODOS';
export const DELETE_TODOS = 'DELETE_TODOS';

export const addTodod = (payload) => {
    return {type: 'ADD_TODOS', payload};
}
export const deleteTodo = (payload) => {
    return {type: 'DELETE_TODOS', payload};
}