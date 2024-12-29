import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Todo } from "@/types/todo";

export default async function CreateTodo() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);



  const { data: todos, error} = await supabase.from('todos').select();

  if (error) {
    throw new Error(`Failed to fetch todos: ${error.message}`);
  }

  console.log(todos);

  return (
    <section>
      <h2>CreateTodo</h2>

      <div>
        <Button>Click me</Button>
      </div>

      <div>
        <h3>UL</h3>
        {/* <ul>
          {todos?.map((todo:any) => (
            <li>{todo}</li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}







  

