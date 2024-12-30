"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Priority } from "@/constants/todos";
import addTodo from "@/app/todos/actions/addTodos";

export const TodosForm: React.FC<Props> = ({ todo }) => {
  return (
    <form action={addTodo} 
          className="space-y-6 max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          name="title"
          id="title"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="due_date">Due Date</Label>
        <Input
          name="due_date"
          id="due_date"
          type="date"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="priority">Priority</Label>
        <Select name="priority" required>
          <SelectTrigger className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500">
            <SelectValue placeholder="Select Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={Priority.P1}>P1</SelectItem>
            <SelectItem value={Priority.P2}>P2</SelectItem>
            <SelectItem value={Priority.P3}>P3</SelectItem>
            <SelectItem value={Priority.P4}>P4</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-y-2">
        <Checkbox
          name="completed"
          id="completed"
          defaultChecked={false}
          className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />
        <Label htmlFor="completed">Is Completed</Label>
      </div>

      <Button
        type="submit"
        variant="default"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 transition duration-200"
      >
        Add
      </Button>
    </form>
  );
};
