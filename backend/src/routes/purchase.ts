import { Router } from 'express';

import { 
    getPurchase,
    getAllPurchase,
    getAllPurchaseOfUser,
    createPurchase,
    deletePurchase
} from '../controller/purchase.ts';

import { checkJWT, isAdmin } from "../middleware/identification.ts";
import { purchaseVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/:id', purchaseVal.get, getPurchase);
router.get('/', checkJWT, isAdmin, getAllPurchase);
router.get('/user/:user_id', checkJWT, isAdmin, purchaseVal.list, getAllPurchaseOfUser);
router.post('/', createPurchase);
router.delete('/:id', checkJWT, isAdmin, purchaseVal.delete, deletePurchase);

export default router;
