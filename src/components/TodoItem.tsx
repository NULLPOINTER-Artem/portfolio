"use client"

type TodoItemProps = {
  title: string,
  id: string,
  complete: boolean,
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
  slotCloseIcon: React.ReactNode
};

export default function TodoItem({ id, title, complete, toggleTodo, deleteTodo, slotCloseIcon }: TodoItemProps) {
  const onChangeLogic = (event: React.ChangeEvent) => {
    toggleTodo(id, (event.target as HTMLInputElement).checked);
  }
  const onDeleteTodo = async (event: React.MouseEvent<HTMLDivElement>) => {
    await deleteTodo(id);
    window.document.location.href = '/';
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
        {slotCloseIcon}
      </div>
    </li>
  )
}
