import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 1,
        task: 'Learn Redux',
        isDone: false
    }]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  // state, action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);   // provides direct mutation no need to return new state
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos.map(todos => {
                if(todos.id === action.payload) {
                    todos.isDone = !todos.isDone;
                }
            })
        },
    }
});

// Automatically, Action creators are generated for each case reducer function
export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;

export default todoSlice.reducer;