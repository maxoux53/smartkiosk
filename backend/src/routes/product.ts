import { Router } from 'express';
import {
    getProduct
} from "../controller/product.ts";
const router = Router();

router.get('/:id', getProduct);
/* router.post('/', addProduct);
router.patch('/', updateProduct);
router.delete('/:id', deleteProduct); */

export default router;
