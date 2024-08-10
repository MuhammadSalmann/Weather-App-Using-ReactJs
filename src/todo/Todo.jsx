import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";

export const Todo = () => {
  let [todos, setTodos] = useState([]);
  let [newtask, setNewTask] = useState("");
  let [isEdit, setIsEdit] = useState({});

  const handleChange = e => setNewTask(e.target.value);

  const addTask = () => {
    newtask.length > 0
      ? setTodos([...todos, { id: uuidv4(), task: newtask, isDone: false }])
      : alert("Please Enter Task");
    setNewTask("");

  };

  const DeleteTask = (id) => setTodos((prevTasks) => prevTasks.filter((task) => task.id !== id));

  const UpperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTasks) => {
        return { ...prevTasks, task: prevTasks.task.toUpperCase() };
      })
    );
  };

  const UpperCaseTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTasks) => {
        if (prevTasks.id === id) {
          return { ...prevTasks, task: prevTasks.task.toUpperCase() };
        }
        return prevTasks;
      })
    );
  };

  const DoneTask = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((prevTasks) =>
        prevTasks.id === id
          ? { ...prevTasks, isDone: !prevTasks.isDone }
          : prevTasks
      )
    );

  const DoneAll = () =>
    setTodos((prevTodos) =>
      prevTodos.map((prevTasks) => ({
        ...prevTasks,
        isDone: !prevTasks.isDone,
      }))
    );

  const UpdateTask = ({ id, task: editedTask }) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTasks) =>
        prevTasks.id === id ? { ...prevTasks, task: editedTask } : prevTasks
      )
    );
    setIsEdit({});
  }

  return (
    <>
      <div className="cont">
        <input
          type="text"
          placeholder="Add your Task"
          value={newtask}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Todo</button>
      </div>
      <br /> <br /> <br /> <hr />
      <h3>Your Tasks:</h3> <hr />
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
            <br />
            {isEdit.id === todo.id ? 
              <>
                <input type="text" value={isEdit.task} onChange={e => setIsEdit({ ...isEdit, task: e.target.value })} />
                <button onClick={() => UpdateTask(isEdit)}>Save Task</button>
              </> :
              <>
                <span style={todo.isDone ? { textDecoration: "line-through" } : {}} >
                  {todo.task.length > 0 ? `${index + 1}. ${todo.task}` : ""}
                </span>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => DeleteTask(todo.id)}>Delete</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => UpperCaseTask(todo.id)}>
                  Upper Case
                </button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => DoneTask(todo.id)}>Mark As Done</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => setIsEdit({id: todo.id, task: todo.task})}>Edit Task</button>
            </>
            }
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={UpperCaseAll}>UpperCase All</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={DoneAll}>Mark All Done</button>
    </>
  );
};
