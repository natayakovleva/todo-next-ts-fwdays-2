import Link from "next/link";
import { TodosList } from "@/components/todo/TodosList";
import TodosActions from "@/components/todo/TodosActions";
import { SearchParams } from "@/types/todo";

import { getTodos } from "@/app/todos/actions/getTodos";

export default async function TodosPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const { data: todos } = await getTodos(resolvedSearchParams);

  return (
    <section className="m-7">
      <Link
        href="/todos/create"
        className="inline-block mt-4 text-white bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-200"
      >
        Create a new todo
      </Link>
      <TodosActions searchParams={resolvedSearchParams}></TodosActions>
      <TodosList todos={todos}></TodosList>
    </section>
  );
}
