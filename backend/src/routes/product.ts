import { Router } from 'express';
import {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/product.ts";
const router = Router();

router.get('/:id', getProduct);
router.post('/', createProduct);
router.patch('/', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
