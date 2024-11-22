import { Request, Response } from "express";
import Database from "../data/db";
import { validationResult } from "express-validator";

const db = new Database();

export const getTodos = async (req: Request, res: Response) => {
  res.json(db.getTodos());
};

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = db.getTodosById(Number(id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const newTodo = { ...req.body, id: Math.floor(Math.random() * 1000000) };
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  db.createTodo(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numId = Number(id);
  const todo = db.getTodosById(numId);

  if (todo) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedTodo = db.updateTodo(numId, req.body);
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numId = Number(id);
  const todo = db.getTodosById(numId);
  if (todo) {
    db.deleteTodosById(numId);
    res.status(204).json();
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};
