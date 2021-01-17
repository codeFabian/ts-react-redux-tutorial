import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import NameInsert from "./components/NameInsert";

function App() {
  return (
    <>
      <TodoInsert />
      <TodoList />
      <NameInsert />
    </>
  );
}

export default App;