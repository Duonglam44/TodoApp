import React from 'react'
import { BiCheck, BiTrash } from 'react-icons/bi'

const ItemToDo = ({ todo, setTodo, item, id }) => {

     const deleteHandler = (e) => {
          e.stopPropagation()
          setTodo(todo.filter(e => e.id !== id))
     }
     const doneHandler = (e) => {
          e.stopPropagation()
          setTodo(
               todo.map((item) => {
                    if (item.id === id) {
                         return {
                              ...item,
                              done: !item.done
                         }
                    }
                    return item
               })
          )
     }

     const selectHandler = () => {
          setTodo(
               todo.map(item => {
                    if (item.id === id) {
                         return {
                              ...item,
                              select: true
                         }
                    }else return{
                         ...item,
                         select: false,
                    }
               })
          )
     }

     return (
          <>
               <div className={`todo__list-item ${item.select && 'select'}`} onClick={selectHandler}>
                    <p className={item.done ? 'delete' : ''}>{item.text}</p>
                    <div className='todo__list-icons'>
                         <button className='todo__list-checked' onClick={doneHandler}><BiCheck /></button>
                         <button className='todo__list-trash' data-input='delete' onClick={deleteHandler}><BiTrash /></button>
                    </div>
               </div>
          </>
     )
}

export default ItemToDo
