"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteTodo(formData: FormData) {
  const supabase = await createClient();

  const todoId = formData.get("id")?.toString();

  if (!todoId) {
    console.warn("The Todo ID is not provided");
    return;
  }

  const { error } = await supabase.from("todos").delete().eq("id", todoId);

  if (error) {
    throw new Error(`Failed to delete todo: ${error.message}`);
  }

  revalidatePath("/todos");

  redirect("/todos");
}
