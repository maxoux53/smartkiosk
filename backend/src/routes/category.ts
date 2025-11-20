import { Router } from 'express';
import { replaceCategoryPicture } from '../middleware/image-replacement.ts';
import {
    getCategory,
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controller/category.ts";
const router = Router();

router.get('/:id', getCategory);
router.get('/', getAllCategories);
router.post('/', createCategory);
router.patch('/:id', replaceCategoryPicture, updateCategory);
router.delete('/:id', deleteCategory);

export default router;
