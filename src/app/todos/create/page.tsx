import { Button } from "@/components/ui/button";
import { Todo } from "@/types/todo";
import { getTodos } from "@/app/todos/actions/getTodos";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TodosForm } from "@/components/todo/TodosForm";


const CreateTodo = async () => {
  
  const { data: todos } = await getTodos();

  return (
    <section>
      

      <Card className="p-4 bg-white shadow-lg rounded-lg">
        <CardHeader className="border-b border-gray-200 pb-2">
          <CardTitle className="text-3xl font-semibold text-gray-800">
            Add new todo
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <TodosForm />
        </CardContent>
      </Card>

      {/* <div>
        <h3>Todo List</h3>
        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div> */}
    </section>
  );
};

export default CreateTodo;



  

