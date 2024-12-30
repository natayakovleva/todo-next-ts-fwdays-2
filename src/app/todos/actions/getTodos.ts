"use server";

import { Todo, SearchParams } from "@/types/todo";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Priority, SortBy, Status } from "@/constants/todos";

// interface SearchParams {
//   sortBy?: SortBy;
//   priority?: Priority; 
//   completed?: Status; 
//   due_date?: string; 
// }

// export async function getTodos(searchParams: SearchParams): Promise<{ data: Todo[] }> {
  export async function getTodos(): Promise<{ data: Todo[] }> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  let query = supabase
  .from("todos")
  .select();



  const { data, error } = await query;

  if (error) {
    throw new Error(`Failed to fetch todos: ${error.message}`);
  }

  return { data: data as Todo[] };

}
