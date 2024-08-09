import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoForm from './TodoForm'
import { deleteTodo, markAsDone } from '../features/todoslice'

export const ReduxTodo = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    
    const handleClick = (id) => dispatch(deleteTodo(id))

    const handleDone = (id) => dispatch(markAsDone(id))

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Redux Toolkit Todo</h1> 
        <br />
        <TodoForm />
        <br />
        <ul className='text-xl'>
            {todos.map((todo, index) => (
                <div className='flex mt-5'>
                    <li style={todo.isDone ? {textDecoration: 'line-through'} : {}} className='h-full self-center' key={todo.id}>{index+1}. {todo.task}</li>
                    <button onClick={() => handleClick(todo.id)} className='ml-4 px-2 py-1 rounded bg-red-500 hover:opacity-50 text-white'>Delete</button>
                    <button onClick={() => handleDone(todo.id)} className='ml-4 px-2 py-1 rounded bg-blue-500 hover:opacity-50 text-white'>Done</button>
                </div>
            ))}
        </ul>
    </div>
  )
}