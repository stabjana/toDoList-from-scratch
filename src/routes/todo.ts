import { Router } from "express";
import { createTodo, getTodo, updateToDo } from "../controller/todos";


const router = Router();

router.post('/', createTodo); // gets endpoint from app
router.get('/', getTodo);
router.patch('/:id', updateToDo);
router.delete('/:id');

export default router;
// our waiter