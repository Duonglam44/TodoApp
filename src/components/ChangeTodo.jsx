import React, { useState, useEffect } from 'react'
import { BiX, BiCheckDouble } from 'react-icons/bi'

const ChangeTodo = ({ todo, setTodo, changeHandler }) => {

     const [value, setvalue] = useState('')

     const inputChange = (e) => {
          setvalue(e.target.value)
     }
     useEffect(() => {
          let selectValue
          todo.map(item => {
               if (item.select === true)
                    selectValue = item.text
               return item
          })
          setvalue(selectValue)
     }, [todo])

     const closeModel = (e) => {
          e.preventDefault()
          changeHandler()
     }

     const changeTask = (e) => {
          e.preventDefault()
          setTodo(todo.map(item => {
               if (item.select === true)
                    return {
                         ...item,
                         text: value
                    }
               return item
          }))
     }

     const pressHandler = (e) => {
          if(e.keyCode === 27) changeHandler()
          else if (e.keyCode === 13) {
               setTodo(todo.map(item => {
                    if (item.select === true)
                         return {
                              ...item,
                              text: value
                         }
                    return item
               }))
          }
     }

     return (
          <form className='todo__change'>
               <input className='todo__change-input' placeholder='select your task...' type="text" value={value || ''} onChange={inputChange} onKeyDown={pressHandler}/>
               <div>
                    <button className='todo__change-close' onClick={closeModel}><BiX /></button>
                    <button type='submit' className='todo__change-confirm' onClick={changeTask}><BiCheckDouble /></button>
               </div>
          </form>
     )
}

export default ChangeTodo
