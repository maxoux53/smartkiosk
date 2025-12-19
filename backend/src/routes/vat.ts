import { Router } from 'express';

import { 
    getVat,
    getAllVats,
    createVat,
    updateVat,
    deleteVat

} from '../controller/vat.ts';

import { isAdmin } from '../middleware/identification.ts';
import { vatVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/:type', vatVal.get, getVat);
router.post('/', isAdmin, vatVal.create, createVat);
router.patch('/:type', isAdmin, vatVal.update, updateVat);
router.get('/', vatVal.list, getAllVats);
router.delete('/:type', isAdmin, vatVal.delete, deleteVat);

export default router;
