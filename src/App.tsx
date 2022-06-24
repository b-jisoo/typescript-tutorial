import React, { useState } from "react";
import "./App.css";
import { InputFeild } from "./component/InputFeild";
import TodoList from "./component/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild
        todo={todo}
        setTodo={setTodo}
        handleAdd={(e) => handleAdd(e)}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

// 1:03:13
//Ref current
//react 옵셔널체이닝 찾아보기
