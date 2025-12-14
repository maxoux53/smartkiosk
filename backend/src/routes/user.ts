import { Router } from 'express';
import { checkJWT, isAdmin } from '../middleware/identification.ts';
import {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controller/user.ts";
import { userVal } from "../middleware/validation/validator.ts"

const router = Router();

router.get('/:id', checkJWT, isAdmin, userVal.get, getUser);
router.get('/', checkJWT, isAdmin, getAllUsers);
router.post('/', userVal.create, createUser);
router.patch('/', checkJWT, isAdmin, userVal.update, updateUser);
router.delete('/:id', userVal.delete, deleteUser);

export default router;
