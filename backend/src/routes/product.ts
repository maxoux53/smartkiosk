import { Router } from 'express';

import {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/product.ts";

import { productVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/:id', productVal.get, getProduct);
router.post('/', productVal.create, createProduct);
router.patch('/', productVal.update, updateProduct);
router.delete('/:id', productVal.delete, deleteProduct);

export default router;
