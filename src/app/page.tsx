import { prisma } from "@/db";

// Components
import TodoItem from "@/components/TodoItem";
import IconImporter from "@/components/IconImporter";
import { redirect } from "next/dist/server/api-utils";

function getTodos() {
  return prisma.todo.findMany({
    orderBy: [
      {
        createdAt: 'asc'
      }
    ]
  });
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete
    }
  });
};

async function deleteTodo(id: string) {
  "use server"

  await prisma.todo.delete({
    where: {
      id,
    },
  });
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="home-page">
      <h1 className="home-page__heading">Todo List</h1>

      <ul className="todo-list">
        {todos.length ?
          todos.map((todo) => <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            slotCloseIcon={
              <IconImporter
                name-icon="close"
              />
            }
          />)
          :
          <>
            <div className="todo-list__empty">
              You do not have a task yet
            </div>
          </>
        }
      </ul>
    </main>
  );
}
