import { Router } from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
} from "../controllers/todoController";
import { body } from "express-validator";

const router = Router();



const validatePostBody = [
  body("completed").isBoolean().withMessage("Completed must be a boolean"),
  body("title")
    .isString()
    .notEmpty()
    .withMessage("Title is required and must be a string"),
];

router.get("/tasks", getTodos);
router.post("/tasks", validatePostBody, createTodo);
router.put("/tasks/:id", validatePostBody, updateTodo);
router.delete("/tasks/:id", deleteTodo);
router.get("/tasks/:id", getTodoById);

export default router;
