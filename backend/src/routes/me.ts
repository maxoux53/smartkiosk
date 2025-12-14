// me = current logged user, obtained from JWT
import { Router } from 'express';
import { checkJWT, self } from '../middleware/identification.ts';

import { getUser, updateUser } from '../controller/user.ts';
import { userVal } from '../middleware/validation/validator.ts';
import { getAllPurchaseOfUser} from '../controller/purchase.ts';
import { createEvent, getAllEventsByUser } from '../controller/event.ts';
import { eventVal } from '../middleware/validation/validator.ts';


const router = Router();

// Accessible routes by the logged in user 
router.get('/me', checkJWT, self, getUser);
router.patch('/me', checkJWT, self, userVal.update, updateUser);
router.get('/me/purchases', checkJWT, self, getAllPurchaseOfUser);
router.post('/me/event', checkJWT, self, eventVal.create, createEvent);
router.get('/me/events', checkJWT, self, getAllEventsByUser);

export default router;
