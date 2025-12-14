import { Router } from 'express';
import { replaceCategoryPicture } from '../middleware/image-replacement.ts';
import {
    getCategory,
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controller/category.ts";
import { categoryVal } from '../middleware/validation/validator.ts';
const router = Router();

router.get('/:id', categoryVal.get, getCategory);
router.get('/', getAllCategories);
router.post('/', categoryVal.create, createCategory);
router.patch('/:id', categoryVal.update, replaceCategoryPicture, updateCategory);
router.delete('/:id', categoryVal.delete, deleteCategory);

export default router;
