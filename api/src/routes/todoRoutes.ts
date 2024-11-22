import { Router } from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
} from "../controllers/todoController";

const router = Router();

router.get("/tasks", getTodos);
router.post("/tasks", createTodo);
router.put("/tasks/:id", updateTodo);
router.delete("/tasks/:id", deleteTodo);
router.get("/tasks/:id", getTodoById);

export default router;
