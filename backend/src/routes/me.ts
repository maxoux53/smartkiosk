import { Router } from 'express';

import {
    getUser,
    updateUser,
    deleteUser
} from '../controller/user.ts';
import {
    getPurchasesByUser,
    createPurchase
} from '../controller/purchase.ts';
import { 
    getEventsByUser,
    createEvent 
} from '../controller/event.ts';
import {
    joinEvent,
    deleteMembership
} from '../controller/membership.ts';

import { replaceUserAvatar } from '../middleware/image-replacement.ts';
import { userVal } from '../middleware/validation/validator.ts';
import { eventVal } from '../middleware/validation/validator.ts';
import { membershipVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/', getUser);
router.patch('/', userVal.update, replaceUserAvatar, updateUser);
router.delete('/', deleteUser);

router.post('/event', eventVal.create, createEvent);
router.get('/events', getEventsByUser);


router.get('/purchases', getPurchasesByUser);
router.post('/purchase', createPurchase);

router.post('/event/:event_id', membershipVal.join, joinEvent);
router.delete('/event/:event_id', membershipVal.delete, deleteMembership);

export default router;
