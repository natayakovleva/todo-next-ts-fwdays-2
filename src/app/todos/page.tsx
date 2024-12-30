import Link from "next/link";
import { TodosForm } from "@/components/todo/TodosForm";
import { TodosList } from '@/components/todo/TodosList';

export default function Todos() {
  return (
    <section className="m-7">
      <Link href="/todos/create"
      className="inline-block mt-4 text-white bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-200">
        Create a new todo
      </Link>
      <TodosList/>
      <TodosForm/>
    </section>
  );
}
