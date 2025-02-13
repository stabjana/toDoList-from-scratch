import { Router } from "express";
import { createTodo, deleteToDo, getTodo, updateToDo } from "../controller/todos";


const router = Router();

router.post('/', createTodo); // gets endpoint from app
router.get('/', getTodo);
router.patch('/:id', updateToDo);
router.delete('/:id', deleteToDo);

export default router;
// our waiter