import { Button } from "@/components/ui/button";
import { Todo } from "@/types/todo";

import { getTodos } from "@/app/todos/actions/getTodos";




const CreateTodo = async () => {
  
  const { data: todos } = await getTodos({});

  console.log(todos);

  return (
    <section>
      <h2>Create Todo</h2>

      <div>
        <Button>Click me</Button>
      </div>

      <div>
        <h3>Todo List</h3>
        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CreateTodo;



  

