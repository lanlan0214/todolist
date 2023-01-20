import React from 'react'
import './styles.scss'
import TodoList from './TodoList'


const App = () => {

  return (
    <div className='app'>
      <div className='container'>
        <TodoList />
      </div>
    </div>
  )
}

export default App
