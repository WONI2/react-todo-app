import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import './scss/TodoInput.scss';
import cn from 'classnames';

const TodoInput = ({add}) => {
    
    // 입력창이 열리는 여부를 표현하는 값
    const [open, setOpen] = useState(false);
    
    // 할일 입력창에 입력한 내용을 표현하는 상태값
    const [todoText, setTodoText] = useState('');
    
    // 버튼 클릭시 이벤트 처리
    const onToggle = () => {
        setOpen(!open);
    };

    //서브밋 이벤트 핸들러
    const submitHandler = e => {
        e.preventDefault(); //태그의 기본기능 제한 
        // console.log('폼이 제출됨');

        // 바닐라 스크립트에서 사용하던 방법 
        // const $input = document.querySelector('.insert-form input');
        // // console.log($input.value);
        // $input.value = '';


        console.log(todoText);
        // todoTemplate에서 받아온 함수 
        add(todoText);

        // 입력이 끝나면 입력창 비우기
        setTodoText('');


    };
    // input change 이벤트 핸들러 함수
    const todoChangeHandler = e => {
        // console.log(e.target.value);
        setTodoText(e.target.value);
    };


    return (
    <>
        {
           open && ( <div className='form-wrapper'>
                <form className='insert-form' onSubmit={submitHandler}>
                       <input 
                           type='text'
                           placeholder='할 일을 입력 후, 엔터를 누르세요!'
                           onChange={todoChangeHandler}
                           autoFocus
                           value={todoText}
                       />
                </form>
               </div>)
        }


        
        {/* cn() : 첫번째 param: 항상 유지할 클래스
                   두번째 param : 논리 상태 값
                    -> 논리 상태값이 true일 경우 해당 클래스 추가, false인 경우 제거 
                    {abc: open} -> open이 true 일경우 class abc가 붙음 
                    */}
        <button className={cn('insert-btn', {open})} onClick={onToggle}>
            <MdAdd />
        </button>
    </>
  )
}

export default TodoInput