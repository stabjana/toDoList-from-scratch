import { RequestHandler } from "express";
import { ToDo } from "../models/toDo";

/* export const createTodo=(
    req: Request,
    res: Response,
    next: NextFunction
) => {}; */

const TODOS: ToDo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  // const text = req.body.text;
  const text = (req.body as { text: string }).text;

  const newTodo = new ToDo(Math.random().toString(), text); // need identifier and type
  TODOS.push(newTodo);

  res.status(201).json({ message: "Created to do", createTodo: newTodo }); // feedback to user
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.json({ todo: TODOS });
};

export const updateToDo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text; // do you have that id?
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Could not find todo");
  }
  TODOS[todoIndex] = new ToDo(TODOS[todoIndex].id, updatedText); // update text
  res.json({ message: "Updated todo", updateTodo: TODOS[todoIndex] });
};

export const deleteToDo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
  
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  
    if (todoIndex < 0) {
      throw new Error("Could not find todo");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "Deleted todo", deletedId: todoId});
  };
  
