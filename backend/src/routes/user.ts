import { Router } from 'express';
import {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controller/user.ts";
import { userVal } from "../middleware/validation/validator.ts"

const router = Router();

router.get('/:id', userVal.get, getUser);
router.get('/', getAllUsers);
router.post('/', userVal.create, createUser);
router.patch('/', userVal.update, updateUser);
router.delete('/:id', userVal.delete, deleteUser);

export default router;
