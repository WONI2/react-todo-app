import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'
import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

    // 서버에 할 일 목록을 요청해서 받아와야 함(json으로)
    // const todos = [
    //     {
    //         id : 1,
    //         title: '산책',
    //         done: false
    //     },
    //     {
    //         id : 2,
    //         title: '낮잠자기',
    //         done: false
    //     },
    //     {
    //         id : 3,
    //         title: '상추에 물주기',
    //         done: false
    //     },
    //     {
    //         id : 4,
    //         title: '감자 캐기',
    //         done: true
    //     }
    // ];

//todos를 상태변수로 만들어줌, todos를 set을 사용해야만 값을 변경할 수 있음 
    const [todos, setTodos] = useState([
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
    ]);

    //  id값 시퀀스 생성함수
    const makeNewId = () => {
        if(todos.length === 0 ) return 1;
        return todos[todos.length-1].id+1;
    }

// todoInput에게 todoText를 받아오는 함수
    const addTodo = todoText => {
        // console.log('할일 정보 in todoTemplate: ',todoText);
        const newTodo = {
            id: makeNewId(),
            title: todoText,
            done: false
        };

        // todos.push(newTodo);

        // PUSH가 아니라 setTodos를 통해 다시 초기값으로 해줌. 새로운 것으로 교체해주는 방향으로 해야 한다는 점 기억!
        // 아래 모두 가능 
        // setTodos();
        // setTodos(todos.concat([newTodo]));
        setTodos([...todos,newTodo]);


        // 리액트 상태변수는 무조건 setter를 통해서만 상태값을 변경해야 렌더링에 적용된다
        // 다만 상태변수가 불변성을 가지기 때문에 기존의 상태에서 변경이 불가능하고
        // 새로운 상태를 만들어서 변경해야 한다
    };

    // 렌더링 후 실행되는 함수
    useEffect(() => {
        console.log(todos);
    }, [todos]);


  return (
    <div className='TodoTemplate'>
        <TodoHeader />
        <TodoMain todoList={todos}/>
        <TodoInput add={addTodo}/>
    </div>
  )
}

export default TodoTemplate