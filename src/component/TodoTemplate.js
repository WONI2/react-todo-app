import React from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'
import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

    // 서버에 할 일 목록을 요청해서 받아와야 함(json으로)
    const todos = [
        {
            id : 1,
            title: '산책',
            done: false
        },
        {
            id : 2,
            title: '낮잠자기',
            done: false
        },
        {
            id : 3,
            title: '상추에 물주기',
            done: false
        },
        {
            id : 4,
            title: '감자 캐기',
            done: true
        }
    ];




  return (
    <div className='TodoTemplate'>
        <TodoHeader />
        <TodoMain todoList={todos}/>
        <TodoInput />
    </div>
  )
}

export default TodoTemplate