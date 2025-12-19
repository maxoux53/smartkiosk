import { Router } from 'express';

import {
    getEvent,
    getAllEvents,
    updateEvent,
    deleteEvent
} from "../controller/event.ts";
import {
    createProduct,
    getProductsByEvent
} from '../controller/product.ts';
import {
    getPurchasesByEvent
} from '../controller/purchase.ts';
import { createMembership } from '../controller/membership.ts';

import { eventVal, membershipVal, productVal, purchaseVal } from '../middleware/validation/validator.ts';
import { replaceEventImage } from '../middleware/image-replacement.ts';
import { isAdmin, isHost } from "../middleware/identification.ts";

const router = Router();

router.get('/:event_id', eventVal.get, getEvent);
router.get('/', isAdmin, getAllEvents);
router.patch('/:event_id', isHost, eventVal.update, replaceEventImage, updateEvent);
router.delete('/:event_id', eventVal.delete, isHost, deleteEvent);

router.post('/:event_id/cashier', isHost, membershipVal.create, createMembership);

router.get('/:event_id/products', productVal.getByEvent, getProductsByEvent);
router.post('/:event_id/product', productVal.create, createProduct);

router.get('/:event_id/purchases', isHost, purchaseVal.getByEvent, getPurchasesByEvent);

export default router;
