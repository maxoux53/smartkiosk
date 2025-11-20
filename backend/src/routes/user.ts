import { Router } from 'express';
import { replaceUserAvatar } from '../middleware/image-replacement.ts';
import {
    getProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/product.ts";

const router = Router();

router.get('/:id', getProduct);
router.get('/', getAllProducts);
router.post('/', createProduct);
router.patch('/', replaceUserAvatar, updateProduct);
router.delete('/:id', deleteProduct);

export default router;
