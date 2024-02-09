"use client"

import { useState } from "react";

// Components
import TodoItem from "@/components/TodoItem";

interface ITodoItem {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
}
type TodoListProps = {
  getTodos: Function,
  toggleTodo: Function,
  deleteTodo: Function,
  fetchedTodos: ITodoItem[]
};

export default function TodoList({
  getTodos, toggleTodo,
  deleteTodo, fetchedTodos
}: TodoListProps) {
  const [todos, setTodos] = useState<ITodoItem[]>(fetchedTodos ?? []);
  const fetchData = async () => {
    setTodos(await getTodos());
  };

  const handleRefreshList = () => {
    fetchData();
  };

  return <>
    <button type="button" onClick={handleRefreshList}>refresh</button>
    <ul className="todo-list">
      {todos.length ?
        todos.map((todo) => <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          fetchData={fetchData}
        />)
        :
        <>
          <div className="todo-list__empty">
            You do not have a task yet
          </div>
        </>
      }
    </ul>
  </>
}
