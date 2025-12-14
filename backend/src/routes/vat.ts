import { Router } from 'express';
import { checkJWT, isAdmin } from '../middleware/identification.ts';

import { 
    getVat,
    getAllVats,
    createVat,
    updateVat,
    deleteVat

 } from '../controller/vat.ts';
import { vatVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/:id', vatVal.get, getVat);
router.post('/', checkJWT, isAdmin, vatVal.create, createVat);
router.get('/', getAllVats);
router.patch('/', checkJWT, isAdmin,vatVal.update, updateVat);
router.delete('/:id', checkJWT, isAdmin, vatVal.delete, deleteVat);

export default router;
