import { response } from "express";
import { Todo } from "../models/todo";

class Database {
  todos: Todo[] = [];

  constructor() {}

  public getTodos(): Todo[] {
    return this.todos;
  }

  public getTodosById(id: number): Todo | undefined {
    return this.todos.find((t) => t.id === id);
  }

  public deleteTodosById(id: number) {
    return this.todos = this.todos.filter((t) => t.id !== id);
  }

  public updateTodo(id: number, newTodo: Partial<Todo>): Todo {
    this.todos.map((t) => (t.id === id ? { ...t, ...newTodo } : t));
    return { id, ...newTodo } as Todo;
  }
  public createTodo(newTodo: Todo) {
    return this.todos.push(newTodo);
  }
}

export default Database;
