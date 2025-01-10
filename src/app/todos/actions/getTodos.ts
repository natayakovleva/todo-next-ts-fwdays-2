"use server";

import { createClient } from "@/utils/supabase/server";
import { Todo, SearchParams } from "@/types/todo";
import { Priority, SortBy, Status } from "@/constants/todos";

export async function getTodos(
  searchParams: SearchParams
): Promise<{ data: Todo[] }> {
  const supabase = await createClient();


  const params = await searchParams; 

  let query = supabase
    .from("todos")
    .select()
    .order(getSortBy(params.sortBy), { ascending: true });

  const priority = getPriority(params.priority);

  if (priority !== Priority.ANY) {
    query = query.eq("priority", priority);
  }

  if (
    params.completed !== undefined &&
    params.completed !== Status.ALL
  ) {
    query = query.eq("completed", params.completed === Status.COMPLETED);
  }

  const dueDate = getDueDate(params.due_date);

  if (dueDate) {
    const formattedDate = new Date(formatDate(dueDate)).toISOString();
    query = query.eq("due_date", formattedDate);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Failed to fetch todos: ${error.message}`);
  }

  return { data: data as Todo[] };
}

const getSortBy = (sortBy: SortBy): SortBy => {
  switch (sortBy) {
    case SortBy.PRIORITY:
      return SortBy.PRIORITY;
    case SortBy.DUE_DATE:
      return SortBy.DUE_DATE;
    default:
      return SortBy.TITLE;
  }
};

const getPriority = (priority: Priority): Priority => {
  switch (priority) {
    case Priority.P1:
      return Priority.P1;
    case Priority.P2:
      return Priority.P2;
    case Priority.P3:
      return Priority.P3;
    case Priority.P4:
      return Priority.P4;
    default:
      return Priority.ANY;
  }
};

const getDueDate = (dueDate: Date): Date | null => {
  return typeof dueDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dueDate)
    ? new Date(dueDate)
    : null;
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
