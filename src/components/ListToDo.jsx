import React from 'react'
import ItemToDo from './ItemToDo'

const ListToDo = ({ todo, setTodo, filterToDo }) => {

     return (
          <div className='todo__list'>
               {
                    filterToDo.map((item, index) => (
                         <ItemToDo
                              item={item}
                              todo={todo}
                              setTodo={setTodo}
                              key={index}
                              id={item.id}
                         />
                    ))
               }
          </div>
     )
}

export default ListToDo
