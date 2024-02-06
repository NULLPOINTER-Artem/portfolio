import { prisma } from "@/db";

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || !title.length) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false,
    },
  });
}

export default function NewTodo() {
  return (
    <main className="create-todo">
      <div className="create-todo__heading">
        <h1>Create New Task</h1>
      </div>

      <form className="create-todo__form" action={createTodo}>
        <div className="create-todo__form-field">
          <label className="create-todo__form-title" htmlFor="title">
            Task
          </label>
          <input className="create-todo__form-input" type="text" name="title" placeholder="What to do?" required />
        </div>

        <div className="create-todo__form-actions">
          <input className="create-todo__form-btn" type="reset" value={'Reset'} />
          <input className="create-todo__form-btn" type="submit" value={'Create'} />
        </div>
      </form>
    </main>
  )
}
