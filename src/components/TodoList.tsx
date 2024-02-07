"use client"

// Components
import TodoItem from "@/components/TodoItem";
import { useEffect, useState } from "react";

type TodoListProps = {
  slotCloseIcon: React.ReactNode,
  getTodos: Function,
  toggleTodo: Function,
  deleteTodo: Function,
};
interface ITodoItem {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function TodoList({ slotCloseIcon, getTodos, toggleTodo, deleteTodo }: TodoListProps) {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const fetchData = async () => {
    setTodos(await getTodos());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul className="todo-list">
      {todos.length ?
        todos.map((todo) => <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          fetchData={fetchData}
          slotCloseIcon={slotCloseIcon}
        />)
        :
        <>
          <div className="todo-list__empty">
            You do not have a task yet
          </div>
        </>
      }
    </ul>
  )
}
