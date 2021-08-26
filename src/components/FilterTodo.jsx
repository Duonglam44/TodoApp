import React, { useRef } from 'react'
import ChangeTodo from './ChangeTodo'

const FilterTodo = ({ todo, setTodo, status, setStatus,clearDoneHandler }) => {

     const statusHandler = (e) => {
          setStatus(e.target.value)
     }
     const refFilter = useRef(null)
     const changeHandler = () => refFilter.current.classList.toggle('active')


     return (
          <div className='filter' ref={refFilter}>
               <ChangeTodo
                    todo={todo}
                    setTodo={setTodo}
                    changeHandler={changeHandler}
               />
               <div className="todo__filter">
                    <div className='todo__filter-onchange' onClick={changeHandler}>
                         <span className='todo__filter-item change'>Change content</span>
                    </div>

                    <div className='todo__filter-list'>
                         <div className='todo__filter-item' >
                              <button onClick={statusHandler} value='all'>all</button >
                         </div>
                         <div className='todo__filter-item' >
                              <button onClick={statusHandler} value='done'>done</button >
                         </div>
                         <div className='todo__filter-item' >
                              <button onClick={statusHandler} value='pendding'>Pendding</button >
                         </div>
                         <div className='todo__filter-item' >
                              <button onClick={statusHandler} onClick={clearDoneHandler} className='todo__filter-warning' value='clear'>clear all done</button >
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default FilterTodo
