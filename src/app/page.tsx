import { prisma } from "@/db";

// Components
import NotifyComponent from "@/components/NotifyComponent";
import TodoList from "@/components/TodoList";
import AboutSection from "@/components/AboutSection";
import HorizontalSmoothScroll from "@/components/HorizontalSmoothScroll";

export const dynamic = 'force-dynamic'; // use pure SSR

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
  const fetchedTodos = await getTodos();

  return (
    <main className="home-page">
      <AboutSection />

      <HorizontalSmoothScroll>
        <NotifyComponent />
        <NotifyComponent />
        <NotifyComponent />
      </HorizontalSmoothScroll>

      <h1 className="home-page__heading">Todo List</h1>

      <TodoList
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        getTodos={getTodos}
        fetchedTodos={fetchedTodos}
      />
    </main>
  );
}
