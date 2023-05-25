import React from 'react'
import TodoItem from './TodoItem'
import './scss/TodoMain.scss';

const TodoMain = ({todoList}) => {
  
//   console.log(props.todoList);

// const renderTodoItem = () => {
//     // const todoItems = [];
//     // for(const todo of todoList) {
//     //     TodoItem.push(<TodoItem />)
//     // }
//     const todoItems =todoList.map(todo => <TodoItem />)

//     return todoItems;
// };


    return (
   <ul className='todo-list'>
    {
        todoList.map(todo => <TodoItem key={todo.id} item={todo} />)
    }
   </ul>
  )
}

export default TodoMain