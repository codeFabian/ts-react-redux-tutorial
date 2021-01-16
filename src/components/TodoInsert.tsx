//* 새항목을 등록 할 수 있는 컴포넌트입니다.
import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from "../hooks/useAddTodo";

const TodoInsert = () => {
    const [value, setValue] = useState('');
    const addTodo = useAddTodo();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: 커스텀 훅 사용해서 새 항목등록
        addTodo(value)
        setValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>

    );
};

export default TodoInsert;