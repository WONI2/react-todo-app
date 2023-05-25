import React from 'react'
import './scss/TodoItem.scss';
import {MdDoneOutline, MdDelete} from 'react-icons/md';
import cn from 'classnames';

// props.item
const TodoItem = ({item, remove}) => {

    const {id,title,done} = item;


    

  return (
    <li className='todo-list-item'>
        <div className={cn('check-circle',{active: done})}>
            {done && <MdDoneOutline />}
        </div>
        <span className={cn('text',{finish: done})}>{title}</span>
        <div className='remove' onClick={() => remove(id)}> 
            <MdDelete />
        </div>
    </li>
  )
}

export default TodoItem