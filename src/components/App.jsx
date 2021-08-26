import React, { useState, useEffect } from 'react'
import FormToDo from './FormToDo'
import ListToDo from './ListToDo'
import FilterTodo from './FilterTodo'


const App = () => {
     const [todo, setTodo] = useState([])
     const [status, setStatus] = useState('all')
     const [filterToDo, setFilterToDo] = useState([])

     useEffect(() => {
          filterHandler()
     }, [todo, status])

     const filterHandler = () => {
          switch (status) {
               case 'all':
                    setFilterToDo(todo)
                    break
               case 'pendding':
                    setFilterToDo(
                         todo.filter(item => item.done === false)
                    )
                    break
               case 'done':
                    setFilterToDo(
                         todo.filter(item => item.done === true)
                    )
                    break
               default:
                    setFilterToDo(todo)
                    break
          }
     }
     const clearDoneHandler = () => {
          if (window.confirm('Are you sure to clear all completed task?')) {
               setTodo(todo.filter(item => item.done === false))
               alert('it cleared!')
          } else {
               alert('completed tasks was not cleared!')
          }
     }


     return (
          <div className='todo'>
               <h1 className='todo__title'>Tony Todo-List</h1>
               <FormToDo
                    todo={todo}
                    setTodo={setTodo}
               />
               <ListToDo
                    todo={todo}
                    setTodo={setTodo}
                    filterToDo={filterToDo}
               />
               <FilterTodo
                    status={status}
                    setStatus={setStatus}
                    todo={todo}
                    setTodo={setTodo}
                    clearDoneHandler={clearDoneHandler}
               />
          </div>
     )
}

export default App
