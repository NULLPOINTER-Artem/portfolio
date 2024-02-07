import { prisma } from "@/db";

// Components
import NotifyComponent from "@/components/NotifyComponent";
import IconImporter from "@/components/IconImporter";
import TodoList from "@/components/TodoList";

async function getTodos() {
  "use server"

  const todos = await prisma.todo.findMany({
    orderBy: [
      {
        createdAt: 'asc'
      }
    ]
  });

  return todos;
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
  return (
    <main className="home-page">
      <NotifyComponent />

      <h1 className="home-page__heading">Todo List</h1>

      <TodoList
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        getTodos={getTodos}
        slotCloseIcon={
          <IconImporter
            name-icon="close"
          />
        }
      />
    </main>
  );
}
