import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import './scss/TodoInput.scss';
import cn from 'classnames';

const TodoInput = () => {
    
    // 입력창이 열리는 여부를 표현하는 값
    const [open, setOpen] = useState(false);
    
    // 버튼 클릭시 이벤트 처리
    const onToggle = () => {
        setOpen(!open);
    };
    
    const showForm = () => {
     
        // if(open) {} 였던 것을 표현하는 방법. 안에서 if 문을 사용할 수 없기 떼문에 아래와 같이 표현 할 수 있음
        // showForm을 사용하지 않고 하는 방법 
        return open && ( 
            <div className='form-wrapper'>
                <form className='insert-form'>
                       <input 
                           type='text'
                           placeholder='할 일을 입력 후, 엔터를 누르세요!'
                       />
                </form>
               </div>
            );
        
    }

    return (
    <>
        {
           open && ( <div className='form-wrapper'>
                <form className='insert-form'>
                       <input 
                           type='text'
                           placeholder='할 일을 입력 후, 엔터를 누르세요!'
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