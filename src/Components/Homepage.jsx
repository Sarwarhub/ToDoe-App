import React from 'react'

export default function Homepage(props) {
  
    const toDoList = (
    <>
        <li className='todo-item'>
        <span>
            <input type='checkbox'/>
            <span className='todo-item-text'>{props.text}</span>
        </span>    
            <p className='dot'>...</p>
        </li>
        
    </>
    )

    return (
   <> 
    {toDoList}
   </>
  )
}
