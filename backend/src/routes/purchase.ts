import { Router } from 'express';

import { 
    getPurchase,
    getAllPurchases,
    createPurchase,
    deletePurchase
} from '../controller/purchase.ts';

import { purchaseVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/:id', purchaseVal.get, getPurchase);
router.get('/', getAllPurchases);
router.post('/', createPurchase);
router.delete('/:id', purchaseVal.delete, deletePurchase);

export default router;
