import { Router } from 'express';

import {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controller/user.ts";

import { replaceUserAvatar } from '../middleware/image-replacement.ts';
import { isAdmin } from '../middleware/identification.ts';
import { userVal } from "../middleware/validation/validator.ts"

const router = Router();

router.get('/:id', userVal.get, getUser);
router.get('/', isAdmin, getAllUsers);
router.post('/', userVal.create, createUser);
router.patch('/:id', isAdmin, userVal.update, replaceUserAvatar, updateUser);
router.delete('/:id', isAdmin, userVal.delete, deleteUser);

export default router;
