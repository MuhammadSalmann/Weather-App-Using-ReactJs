import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoslice'

const TodoForm = () => {
    let [task, setTask] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(task)
        dispatch(addTodo(task))
        setTask('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input className='px-10 py-2' type="text" value={task} onChange={e => setTask(e.target.value)} placeholder='Enter Task' />
        <button className='bg-slate-500 hover:opacity-50 ml-2 px-10 py-2 rounded text-white'>Add</button>
    </form>
  )
}

export default TodoForm