import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'
import './scss/TodoTemplate.scss';
import { json } from 'react-router-dom';

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

// useEffect : 화면 렌더링 이후 바로 시행되는 ㅎ마수 

    // 서버에 할 일 목록을 요청해서 받아와야 함(json으로)
    const API_BASE_URL ='http://localhost:8181/api/todos';




//todos를 상태변수로 만들어줌, todos를 set을 사용해야만 값을 변경할 수 있음 
    const [todos, setTodos] = useState([
       
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

            // 서버에 보낼 때는 id 와 done만 있으면! 
            // id: makeNewId(),
            title: todoText,
            // done: false
        };

        // todos.push(newTodo);

        // PUSH가 아니라 setTodos를 통해 다시 초기값으로 해줌. 새로운 것으로 교체해주는 방향으로 해야 한다는 점 기억!
        // 아래 모두 가능 
        // setTodos();
        // setTodos(todos.concat([newTodo]));

        fetch(API_BASE_URL, {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body : JSON.stringify(newTodo)
        })
        .then(res => res.json())
        .then(json => {

            setTodos(json.todos);
        });

        // setTodos([...todos,newTodo]);


        // 리액트 상태변수는 무조건 setter를 통해서만 상태값을 변경해야 렌더링에 적용된다
        // 다만 상태변수가 불변성을 가지기 때문에 기존의 상태에서 변경이 불가능하고
        // 새로운 상태를 만들어서 변경해야 한다
    };



    // 할일 삭제 대상 아이디 받아서 삭제하는 함수
    const removeTodo = id => {
        // console.log(`삭제대상 id : ${id}`);

    //    const copyArr = todos.filter(todo => todo.id !== id);
    //    setTodos(copyArr);

        fetch(`${API_BASE_URL}/${id}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(json => {
          setTodos(json.todos);
        });
  


    };

// 할일 체크 처리 함수
    const checkTodo = (id, done) => {
        console.log(`체크한 id : ${id}`);
        
        // setTodos(todos.map(todo => todo.id === id ? {...todo,done: !todo.done} : todo));
        
        fetch(API_BASE_URL, {
            method: 'PUT',
            headers: {'content-type' : 'application/json'},
            body : JSON.stringify({
                done: !done,
                id: id
            })
        })
        .then(res => res.json())
        .then(json => setTodos(json.todos))
    };



    // 체크가 안된 할일의 개수 카운트 학
    const countRestTodo = () => {
        const filteredTodo = todos.filter(todo => !todo.done);
        return filteredTodo.length;
    };

    // 렌더링 후 실행되는 함수
    useEffect(() => {
        // console.log('잉');

        fetch(API_BASE_URL)
        .then(res => res.json())
        .then(json => {
            console.log(json.todos);
            setTodos(json.todos)
        })
    }, []);


  return (
    <div className='TodoTemplate'>
        <TodoHeader count={countRestTodo} />
        <TodoMain remove={removeTodo} 
                  todoList={todos} 
                  check={checkTodo}/>
        <TodoInput add={addTodo}/>
    </div>
  )
}

export default TodoTemplate