//* 추후 커스텀 훅을 작성하여 리덕스 스토어가 가지고 있는 상태의 todos 배열을 조회할 것 
import React from 'react';
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";


const TodoList = () => {
    const todos = useTodos() //TODO: 커스텀 훅을 사용하여 조회
    if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>

    return (
        <ul>
            {todos.map(todo => (<TodoItem todo={todo} key={todo.id} />))}
        </ul>
    );

};

export default TodoList;