import { Router } from 'express';

import {
    getCategory,
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controller/category.ts";

import { replaceCategoryPicture } from '../middleware/image-replacement.ts';
import { isAdmin } from "../middleware/identification.ts";
import { categoryVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/:id', categoryVal.get, getCategory);
router.get('/', getAllCategories);
router.post('/', isAdmin, categoryVal.create, createCategory);
router.patch('/:id', isAdmin, categoryVal.update, replaceCategoryPicture, updateCategory);
router.delete('/:id', isAdmin, categoryVal.delete, deleteCategory);

export default router;
