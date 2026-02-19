import Router from "express";
import { authRequired } from "../middlewares/auth.middleware.js";
import { 
  getTasks, 
  getTask, 
  createTask,
  updateTask,
  deleteTask 
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTask);

router.post(
  "/tasks", 
  validateSchema(createTaskSchema), 
  authRequired, 
  createTask
);

router.put("/tasks/:id", authRequired, updateTask);

router.delete("/tasks/:id", authRequired, deleteTask);

export default router;
