import React from 'react'
import { BiPlus } from 'react-icons/bi'

const FormToDo = ({ todo, setTodo }) => {


     const addTodo = (e) => {
          e.preventDefault()
          const inputText = document.querySelector('input[data-input]')
          if (inputText.value.length > 0) {
               setTodo([
                    ...todo,
                    {
                         text: inputText.value,
                         done: false,
                         id: Math.floor(Math.random() * 1000),
                         select: false,
                    }
               ])
               inputText.value = ''
          } else {
               alert('you must enter your task before submitting!')
          }
     }

     return (
          <div>
               <form action="" className='todo__form'>
                    <input className='todo__form-input' data-input='input-text' type="text" placeholder='enter your tastk...' />
                    <button className="todo__form-icon" type='submit' onClick={addTodo}>
                         <BiPlus />
                    </button>
               </form>
          </div>
     )
}

export default FormToDo
