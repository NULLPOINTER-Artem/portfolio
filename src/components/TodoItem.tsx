"use client"

import IconImporter from "@/components/IconImporter";

type TodoItemProps = {
  title: string,
  id: string,
  complete: boolean,
  toggleTodo: Function;
  deleteTodo: Function;
  fetchData: Function;
};

export default function TodoItem({ id, title, complete, toggleTodo, deleteTodo, fetchData }: TodoItemProps) {
  const onChangeLogic = (event: React.ChangeEvent) => {
    toggleTodo(id, (event.target as HTMLInputElement).checked);
  }
  const onDeleteTodo = async (event: React.MouseEvent<HTMLDivElement>) => {
    await deleteTodo(id);
    fetchData();
  };

  return (
    <li key={id} className="todo-list__item">
      <input
        className="todo-list__item-checkbox"
        type="checkbox"
        id={id}
        defaultChecked={complete}
        onChange={onChangeLogic}
      />
      <label className="todo-list__item-label" htmlFor={id}>{title}</label>

      <div className="todo-list__item-icon" role="button" tabIndex={0} onClick={onDeleteTodo}>
        <IconImporter
          name-icon="close"
        />
      </div>
    </li>
  )
}
