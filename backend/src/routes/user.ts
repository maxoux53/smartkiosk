import { Router } from 'express';
import {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controller/user.ts";

const router = Router();

router.get('/:id', getUser);
router.get('/', getAllUsers);
router.post('/', createUser);
router.patch('/', updateUser);
router.delete('/:id', deleteUser);

export default router;
