import { Router } from 'express';
import {
    getMembership,
    createMembership,
    updateMembership,
    deleteMembership
} from "../controller/membership.ts";
import { membershipVal } from "../middleware/validation/validator.ts"

const router = Router();

router.get('/:user_id/:event_id', membershipVal.get, getMembership);
router.post('/', membershipVal.create, createMembership);
router.patch('/', membershipVal.update, updateMembership);
router.delete('/:user_id/:event_id', membershipVal.delete, deleteMembership);

export default router;