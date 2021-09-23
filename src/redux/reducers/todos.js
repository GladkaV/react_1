import {ADD_TODOS, DELETE_TODOS} from "../action";

const initialState = {
    todos: []
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {...state, todos: [...state.todos, action.payload]};
        case DELETE_TODOS:
            const newState = state.todos.filter(todo => todo.id !== action.payload);
            return {...state, todos: newState};
        default:
            return state;
    }
}