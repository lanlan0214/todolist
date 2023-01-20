import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



const TodoList = () => {
  const LOCAL_STORAGE_KEY = 'todoApp.todos'
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)

  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTodos([...todos, newTask]);
      setNewTask('');
    }
  }
  const handleRemove = (todo) => {
    setTodos(todos.filter(item => item !== todo))
  }
  const handleChange = (e) => {
    setNewTask(e.target.value);
  }


  return (
    <div className='todo'>
      <div className='navbar'>
        <h1 className="title">TO DO LIST</h1>
      </div>
      <div className='card-content'>
        <h1>新增代辦事項</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTask} onChange={handleChange} placeholder="新增項目" />
          <button type="submit">新增</button>
        </form>
      </div>
      <div className='card-action'>
        <h1 className='card-action-title'>代辦項目</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>
              {todo}
              <button onClick={() => handleRemove(todo)}>刪除項目</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
